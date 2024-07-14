const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
// const { all } = require("../controllers");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },

        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id",
            },
        },
    },

    {
        sequelize,
        modelName: "comment",
        timestamps: true,
    }
);

module.exports = Comment;

