const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');
class DeviceController {

    async getAll(req, res) {

    }

    async create (req, res, next) {
        try {

        const {name, price, brandId, typeId, info} = req.body;

        if (!name || !pice || brandId || typeId || info) {
            return next(ApiError('Введены не все данные!'));
        }

        const {img} = req.files;
        
        if (!img) {
            return next(ApiError('Добавьте изображение товара в формате jpg!'));
        }
        let fileName = uuid.v4() + '.jpg';

        img.mv(path.resolve(__dirname, '../', 'static', fileName));

        const device = await Device.create({name, price, brandId, typeId, img: fileName});

        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
            )
        }

        return res.json(device);
        } catch (e) {
            return next(ApiError(e.message, 'Произошла ошибка в процессе добавления товара'))
        }
    }

    async getOne (req, res) {

    }

}

module.exports = new DeviceController();