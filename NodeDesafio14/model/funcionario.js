const Sequelize = require('sequelize')
const database = require('../db/db')

const Funcionario = database.define('funcionario', {
        id: {
                 allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true
         },
        nome: {
                allowNull: false,
                type: Sequelize.STRING
         },
        email: { 
                allowNull: false,
                type: Sequelize.STRING
        },
        telefone: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
})
module.exports = Funcionario