const OEM_Specs = require('../models/oem_specs.model');

const connectToDatabase = require('../configs/db');


const addOemSpecs = async () => {
    const cars = [
        {
            name: "Honda City",
            year: "2015",
            list_price: 16.05,
            available_colors: ["Grey", "White", "Brown", "Blue", "Red"],
            mileage: 18.4,
            power: 119.35,
            max_speed: 150,
        },
        {
            name: "Skoda Slavia",
            year: "2017",
            list_price: 18.68,
            available_colors: ["Blue", "Silver", "Black"],
            mileage: 19.47,
            power: 147.52,
            max_speed: 170
        },
        {
            name: "Hyundai Verna",
            year: "2019",
            list_price: 17.38,
            available_colors: ["Black", "Blue", "Grey", "White"],
            mileage: 20.6,
            power: 157.57,
            max_speed: 180
        },
        {
            name: "Volkswagen Virtus",
            year: "2020",
            list_price: 18.57,
            available_colors: ["Red", "Blue", "White"],
            mileage: 19.4,
            power: 147.51,
            max_speed: 160
        },
    ]

    await OEM_Specs.create(cars);

    console.log(cars.length + " cars added");
}

connectToDatabase()
    .then(() => addOemSpecs());
