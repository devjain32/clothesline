// Creating our Clothes model
module.exports = function (sequelize, DataTypes) {
    var Images = sequelize.define("Images", {
        // The email cannot be null, and must be a proper email before creation
        imageOne: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageTwo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageThree: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Images.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Images.belongsTo(models.Clothes, {
            foreignKey: {
                allowNull: false
            }
        });
        // Clothes.hasMany(models.images, {
        //     as: "images",
        //     foreignKey: models.images.id,
        //     ondelete: "cascade"
        // });

    };

    return Images;
};
