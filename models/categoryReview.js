const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class categoryReview extends Model {}

categoryReview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categoryName',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'categoryReview',
    }
);

module.exports = categoryReview;