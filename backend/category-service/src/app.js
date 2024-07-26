require('dotenv').config();
const { createConnection } = require('typeorm');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT =  3001;

app.use(cors())

app.use(express.json()); 
app.use(morgan('dev'))


createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        'src/entity/*.js'
    ],
    // dropSchema: true
    
    }).then(() => {
        
        // console.log('Conectado a la base de datos PostgreSQL');

        app.use('/categories', require('./routes/category.routes'));

        app.listen(PORT, () => {
            console.log(`Server running: ${PORT}`);
        });
    }).catch(error => console.log('error in the DB connection', error));
