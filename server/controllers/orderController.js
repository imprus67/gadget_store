const {Order} = require('../models/models')
const ApiError = require('../error/ApiError');

class OrderController {

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json({
            types
        })
    }

    async create (req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

}

module.exports = new OrderController();