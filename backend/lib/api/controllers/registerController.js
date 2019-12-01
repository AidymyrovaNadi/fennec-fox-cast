'use strict';

const boom = require('@hapi/boom');

const User = require('../../data/models/user.js');

const crypt = require('../../helpers/crypt.js');

// Add new user
exports.addUser = async req => {
    try {
        const data = req.body;
        if (await User.findOne({ username: data.username })) {
            return { status: '409, Conflict', data: 'User already exists!' };
        } else {
            data.password = await crypt.encrypt(data.password);
            data.token = '';
            data.rooms = [];
            data.friends = [];

            const user = new User(data);

            return { status: '200, Ok', data: await user.save() };
        }
    } catch (err) {
        throw boom.boomify(err);
    }
};
