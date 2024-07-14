const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    
    {
        sequelize,
        modelName: "post",
        timestamps: true,
    }
);

module.exports = Post;
