const ApiError = require('./../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Order} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    
    async signup(req, res) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Неправильный email или password'))
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({email, role, password: hashedPassword});
        const order = await Order.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }

    async login (req, res) {

        const {email, password} = req.body;

        const user = await User.findOne({where: {email}});

        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(user.id, user.email, user.role);

        return res.json({token});
    }

    async check (req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});

    }
}

module.exports = new UserController();