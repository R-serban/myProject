const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize("node_test", "node", "30032003", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})
module.exports = async function get (name, age, reacts, attache) {
    const Test = sequelize.define('date', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    await Test.sync();
   if (reacts === "create") {
        const test = await Test.create({ name: name, age: age });
        test.save();
        return true
    } else if (reacts === "update" ) {
        if (name === attache) {
            const test = await Test.findOne({ name: name });
            test.update({age: age}).then(result => {
                return true;
            }).catch(err => {
                return false;
            });
        } else if (age == attache) {
            const test = await Test.findOne({ age: age });
            test.update({name: name}).then(result => {
                return true;
            }).catch(err => {
                return false;
            });
        } else {
            throw new Error("attache isn't correct");
        }
    } else if (reacts === "delete") {
        const test = await Test.findOne({name: name});
        test.destroy();
    } else {
        throw new Error(reacts + " is not allowed");
    }
    
}