const Dealer = require("../models/dealers.model");
const jwt = require("jsonwebtoken");
const configs = require("../config/configs");

function generateToken(dealer) {
    let payload = {
        id: dealer._id,
        name: dealer.name,
        email: dealer.email,
    }

    const token = jwt.sign(payload, configs.JWT_SECRET_KEY);
    return token;
}

function verifyToken(token) {
    let dealer = jwt.verify(token, configs.JWT_SECRET_KEY);
    return dealer;
}

async function registerDealer(dealerDetails) {

    let { email } = dealerDetails;
    let alreadyExists = await Dealer.findOne({ email });

    if (alreadyExists) {
        throw new Error("Dealer already exists");
    }

    let dealer = await Dealer.create(dealerDetails);
    dealer = dealer.toJSON();
    delete dealer.password;

    return dealer;
}

async function loginDealer(email, password) {
    let dealer = await Dealer.findOne({ email });

    if (dealer) {
        if (password === dealer.password) {
            dealer = dealer.toJSON();
            delete dealer.password;
            return {
                token: generateToken(dealer),
                dealer,
            }

        } else {
            throw new Error("Password is incorrect");
        }

    } else {
        throw new Error("Dealer does not exist");
    }

}


module.exports = { registerDealer, loginDealer, verifyToken }