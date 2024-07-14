const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection")

    class User extends Model {
        checkPassword(loginPW) {
            return bcrypt.compareSync(loginPW, this.password);
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
    ),

    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            beforeUpdate: async (newUser) => {
                if(newUser.changed("password")) {
                    newUser.password = await bcrypt.hash(newUser.password, 10);
                }
            },
        },
        sequelize,
        modelName: "user",
        timestamps: false
    };

    module.exports = User;
