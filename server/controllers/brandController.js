const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json({
            brands
        })
    }

    async create(req, res) {
        const {name} = req.body;
        const type = await Brand.create({name});
        return res.json(type);
    }

}

module.exports = new BrandController()