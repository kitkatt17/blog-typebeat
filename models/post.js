const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { title } = require('process');

class Post extends Model {}

Post.init({
    
        body: {
            type: DataTypes.STRING,
            allowNull: false,
    },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
    },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'post'
    }  

);

module.exports = Post;