const ApiError = require('./../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Order } = require('../models/models');
const validator = require('validator');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}


class UserController {

    async signup(req, res, next) {

        const { email, password } = req.body;

        if (!validator.isEmail(email)) {
            return next(ApiError.badRequest('Указан некорректный формат почты (email)'))
        }

        if (!validator.isLength(password, { min: 8, max: undefined })) {
            return next(ApiError.badRequest('Пароль должен быть не короче 8 символов'))
        }

        const candidate = await User.findOne({ where: { email } });

        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ email, role: 'USER', password: hashedPassword });
        //const order = await Order.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({
          message: 'Success',
          token });
    }

    async login(req, res, next) {

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(user.id, user.email, user.role);

        return res.json({ token });
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });

    }
}

module.exports = new UserController();
