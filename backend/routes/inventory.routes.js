const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Inventory = require('../models/inventory.model');

const router = express.Router();


router.get('/', authMiddleware, async (req, res) => {
    try {
        const carsData = await Inventory.find();
        return res.status(200).send({
            'message': "Here are the available cars",
            data: carsData,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            'message': 'Something went wrong'
        });
    }

})

router.post('/', authMiddleware, async (req, res) => {
    try {
        const newCar = await addCarToInventory(req.body, req.currentUser);
        return res.status(201).send({
            'message': "New Car added to inventory",
            data: newCar,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            'message': 'Something went wrong'
        });
    }

})

module.exports = router;