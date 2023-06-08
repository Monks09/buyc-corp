const mongoose = require('mongoose');

const oem_specsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        year: { type: String, required: true },
        list_price: { type: Number, required: true },
        available_colors: { type: [String], required: true },
        mileage: { type: Number, required: true },
        power: { type: Number, required: true },
        max_speed: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const OEM_Specs = mongoose.model('oem_specs', oem_specsSchema);

module.exports = OEM_Specs;