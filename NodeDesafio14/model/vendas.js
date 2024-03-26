const Sequelize = require('sequelize')
const database = require('../db/db')
const Funcionario = require('./funcionario')

const Vendas = database.define('vendas', {
        id: {
                 allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true
         },
        data: {
                allowNull: false,
                type: Sequelize.STRING
         },
        numero: { 
                allowNull: false,
                type: Sequelize.STRING
        },
        status: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        id_funcionario: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Funcionario,
                    key: 'id',
            },
        }

})
module.exports = Vendas