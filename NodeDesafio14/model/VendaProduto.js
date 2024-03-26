const Sequelize = require('sequelize')
const database = require('../db/db')
const Vendas = require('./vendas')
const Produtos = require('./Produtos')


const VendasProduto = database.define('vendasProdutos', {
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
        id_Produto: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Produtos,
                    key: 'id',
            },
        },
        id_Vendas: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Vendas,
                key: 'id',
        },
    }

})
module.exports = VendasProduto