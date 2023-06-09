const Inventory = require("../models/inventory.model")

const addCarToInventory = async (carDetails, dealer) => {
    const carObj = {
        ...carDetails,
        seller: {
            id: dealer._id,
            name: dealer.name,
        }
    }

    const car = await Inventory.create(carObj);

    return car;
}


module.exports = { addCarToInventory }