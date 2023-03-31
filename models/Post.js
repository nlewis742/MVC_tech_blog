const { Model, Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: true
    }
);

module.exports = Post;