const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // название базы данных
    process.env.DB_USER, // под каким пользователем будем подключаться
    process.env.DB_PASSWORD, // пароль пользователя базы данных
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
