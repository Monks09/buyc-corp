const express = require('express');

const { registerDealer, loginDealer } = require('../controllers/dealers.controller');

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        let dealer = await registerDealer(req.body);

        res.status(200).send({
            message: "New Dealer Registered Successfully",
            dealer,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})


router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let data = await loginDealer(email, password);

        res.status(200).send({
            message: "Login Successful",
            data,
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            error: "Something went wrong"
        })
    }
})

module.exports = router;