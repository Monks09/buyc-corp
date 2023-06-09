const express = require('express');
const OEM_Specs = require('../models/oem_specs.model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const car_specs = await OEM_Specs.find();
        return res.status(200).send({ car_specs });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            'message': 'Something went wrong'
        });
    }
})

module.exports = router;