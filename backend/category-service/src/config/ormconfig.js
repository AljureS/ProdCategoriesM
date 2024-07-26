require('dotenv').config()

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'category_service_db',
    synchronize: true,
    logging: false,
    entities: [
        'entity/*.js'
    ],
};
