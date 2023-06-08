const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
    {
        image: { type: String, required: true },
        title: { type: String, required: true },
        selling_price: { type: Number, required: true },
        selling_price: { type: Number, required: true },
        odometer_value: { type: Number, required: true },
        major_scratches: { type: Number, required: true },
        original_paint: { type: String, required: true },
        accidents_count: { type: Number, required: true },
        previous_buyers_count: { type: Number, required: true },
        registration_place: { type: String, required: true },
        seller: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Dealer",
                required: true,
            },
            name: { type: String, required: true },
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = Inventory;