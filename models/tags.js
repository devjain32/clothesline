// Creating our Clothes model
module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define("Tags", {
        // The email cannot be null, and must be a proper email before creation
        tagOne: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tagTwo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tagThree: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tagFour: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tagFive: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Tags.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Tags.belongsTo(models.Clothes, {
            foreignKey: {
                allowNull: true
            }
        });
        // Tags.belongsToMany(models.Clothes, {
        //     through: Tags,
        //     as: "tags",
        //     // foreignKey: models.Clothes.id,
        //     ondelete: "cascade",
        // });

    };

    return Tags;
};
