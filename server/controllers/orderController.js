const {Order, User} = require('../models/models')
const ApiError = require('../error/ApiError');
const jwt_decode = require('jwt-decode');


class OrderController {

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json({
            types
        })
    }

    async create (req, res, next) {

        const request = req.body;



        const tokenFromHeaders = req.headers.authorization;

        const token = tokenFromHeaders.replace('Bearer ', '');

        const userEmailFromToken = jwt_decode(token).email;

        const user = await User.findOne({ where: { 'email': userEmailFromToken } });

        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
          }





        const userFromToken = jwt_decode(token).id;

        const order = await Order.create({ userFromToken });

        return res.json({"type": order});
    }

}

module.exports = new OrderController();
