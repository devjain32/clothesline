// Creating our Clothes model
module.exports = function (sequelize, DataTypes) {
    var Clothes = sequelize.define("Clothes", {
        // The email cannot be null, and must be a proper email before creation
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        forPurchase: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        oneDay: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fourDay: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sevenDay: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Clothes.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Clothes.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
        Clothes.hasMany(models.Images, {
            as: "images",
            foreignKey: models.Images.id,
            ondelete: "cascade"
        });
        Clothes.hasMany(models.Tags, {
            as: "tags",
            foreignKey: models.Tags.id,
            ondelete: "cascade"
        });
    };

    return Clothes;
};
