<<<<<<< HEAD

=======
const { Model, DataTypes } = require('sequelize');

const sequelize = require('..config/connection');

class categoryName extends Model {}

categoryName.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'categoryName',
    }
);

module.exports = categoryName;
>>>>>>> 7bf1cfaaf98b1de0ee7a6cf576b91ae688b0b229
