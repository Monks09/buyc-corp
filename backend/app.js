const express = require('express');
const cors = require('cors');
const dealerRoutes = require('./routes/dealers.routes');
const inventoryRoutes = require('./routes/inventory.routes');
const oemSpecsRoutes = require('./routes/oem_specs.routes');
const connectToDatabase = require('./config/db');

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use('/dealers', dealerRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/oem-specs', oemSpecsRoutes);


app.get('/', (req, res) => {
    try {
        return res.status(200).send({
            'message': 'Welcome to BUYC Corp'
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            'message': 'Something went wrong'
        });
    }
})


app.listen(PORT, () => {
    try {
        connectToDatabase();
        console.log('Connected to db');
        console.log(`Listening at port ${PORT}`);
    }
    catch (err) {
        console.log(err);
    }
})