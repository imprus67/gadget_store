require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./router/index');
const PORT = process.env.PORT || 5000;
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const path = require('path');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


//Middleware для обработки ошибок
app.use(errorHandler);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


startServer();