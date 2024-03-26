

const Sequelize = require('sequelize')
const database = require('../db/db')
const Vendas = require('./vendas')

const Produtos = database.define('produtos', {
        id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            primaryKey: true
         },
        descricao: { 
            allowNull: false,
            type: Sequelize.STRING
        },
        data_de_vencimento: {
            allowNull: false,
            type: Sequelize.STRING
        },
        preco: {
            allowNull: false,
            type: Sequelize.REAL
        },
        marca: {
            allowNull: false,
            type: Sequelize.STRING
        },
        tipo: {
            allowNull: false,
            type: Sequelize.STRING
        },
        id_vendas: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Vendas,
                key: 'id',
        },
    },
})
module.exports = Produtos