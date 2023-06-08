
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    body: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id', 
    },
  },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Post',
          key: 'id',
    },
  },
},
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;