const express = require('express')
const app = express()
const database = require('./db/db')
const Funcionario = require('./model/funcionario')
const Vendas = require('./model/vendas')
const Produtos = require('./model/Produtos')
const VendasProduto = require('./model/VendaProduto')

app.use(express.json())

;(async () => {
    try {
    await database.sync({ alter: true })
    console.log('Banco de dados conectado e modelos sincronizados.')
    app.listen(9000, () => {
    console.log('Servidor iniciado na porta 9000.')
    })
    } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error)
    }
    })();
    //---------------------------------------------------------------------------
app.get('/funcionario', (req, res) => {
    Funcionario.findAll()
        .then((funcionario) => {
            if (funcionario.length > 0) {
                    res.json(funcionario)
            } else {
                res.json({ msg: 'Nenhum funcionario encontrada.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
           })
});

app.get('/vendas', (req, res) => {
    Vendas.findAll()
        .then((vendas) => {
            if (vendas.length > 0) {
                res.json(vendas)
            } else {
                es.json({ msg: 'Nenhuma venda encontrada.' })
        }
    })
    .catch((err) => {
        res.json({ erro: 'Houve um erro.' })
      })
});

app.get('/produtos', (req, res) => {
    Produtos.findAll()
        .then((produtos) => {
            if (produtos.length > 0) {
                res.json(produtos)
            } else {
                es.json({ msg: 'Nenhum produto encontrada.' })
        }
    })
    .catch((err) => {
        res.json({ erro: 'Houve um erro.' })
      })
});

app.get('/vendaProduto', (req, res) => {
    VendasProduto.findAll()
        .then((vendaProduto) => {
            if (vendaProduto.length > 0) {
                res.json(vendaProduto)
            } else {
                es.json({ msg: 'Nenhuma venda encontrada.' })
        }
    })
    .catch((err) => {
        res.json({ erro: 'Houve um erro.' })
      })
});
 //------------------------------------------------------------
 app.get('/funcionario/:id', (req, res) => {
    const { id } = req.params
    Funcionario.findAll({
        where: { id: parseInt(id) },
})
    .then((funcionario) => {
        if (funcionario.length > 0) {
            res.json(funcionario)
        } else {
            res.json({ msg: 'funcionario não encontrada.' })
    }
})
.catch((err) => {
    res.json(err)
 })
});
    
app.get('/vendas/:id', (req, res) => {
    const { id } = req.params
    Vendas.findAll({
        where: { id: parseInt(id) },
})
    .then((vendas) => {
        if (vendas.length > 0) {
            res.json(vendas)
        } else {
            res.json({ msg: 'venda não encontrada.' })
    }
})
.catch((err) => {
    res.json(err)
 })
});

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params
    Produtos.findAll({
        where: { id: parseInt(id) },
})
    .then((produtos) => {
        if (produtos.length > 0) {
            res.json(produtos)
        } else {
            res.json({ msg: 'produto não encontrada.' })
    }
})
.catch((err) => {
    res.json(err)
 })
});

app.get('/vendasProdutos/:id', (req, res) => {
    const { id } = req.params
    VendasProduto.findAll({
        where: { id: parseInt(id) },
})
    .then((vendasProdutos) => {
        if (vendasProdutos.length > 0) {
            res.json(vendasProdutos)
        } else {
            res.json({ msg: 'venda de produto não encontrada.' })
    }
})
.catch((err) => {
    res.json(err)
 })
});

app.post('/funcionario', (req, res) => {
    const { nome, email, telefone } = req.body
    if (nome && email && telefone) {
        let novofuncionario = {
            nome: nome,
            email: email,
            telefone: telefone
    }
    Funcionario.create(novofuncionario)
        .then((result) => {
            res.json(result)
    })
        .catch((err) => {
            res.json(err)
        })
    }
});

app.post('/vendas', (req, res) => {
    const { data, numero, status} = req.body
    if (data && numero && status) {
        let novavenda = {
            data: data,
            numero: numero,
            status: status
    }
    Vendas.create(novavenda)
        .then((result) => {
            res.json(result)
    })
        .catch((err) => {
            res.json(err)
        })
    }
});

app.post('/produtos', (req, res) => {
    const { descricao, data_de_vencimento, preco, marca, tipo } = req.body
    if (descricao && data_de_vencimento && preco && marca && tipo) {
        let novoproduto = {
            descricao: descricao,
            data_de_vencimento: data_de_vencimento,
            preco: preco,
            marca: marca,
            tipo: tipo
    }
    Produtos.create(novoproduto)
        .then((result) => {
            res.json(result)
    })
        .catch((err) => {
            res.json(err)
        })
    }
});

app.post('/vendasProdutos', (req, res) => {
    const { data, numero, status} = req.body
        if (data && numero && status) {
            let novavendaproduto = {
                data: data,
                numero: numero,
                status: status
            }
    VendasProduto.create(novavendaproduto)
        .then((result) => {
            res.json(result)
    })
        .catch((err) => {
            res.json(err)
        })
    }
});
        

app.put('/funcionario/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Funcionario.update(alteracao, {
            where: {
                id: parseInt(id),
        },
        })
             .then((result) => {
                if (result[0] === 1) {
                    res.json({ status: result[0], msg: 'Dados alterados com sucesso.' })
            } else {
                    res.json({ status: result[0], msg: 'Não encontrado.' })
        }
    })
        .catch((err) => {
            res.json(err)
        })
});


app.put('/vendas/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Vendas.update(alteracao, {
            where: {
                id: parseInt(id),
        },
        })
             .then((result) => {
                if (result[0] === 1) {
                    res.json({ status: result[0], msg: 'Dados alterados com sucesso.' })
            } else {
                    res.json({ status: result[0], msg: 'Não encontrado.' })
        }
    })
        .catch((err) => {
            res.json(err)
        })
});

app.put('/produto/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Produtos.update(alteracao, {
            where: {
                id: parseInt(id),
        },
        })
             .then((result) => {
                if (result[0] === 1) {
                    res.json({ status: result[0], msg: 'Dados alterados com sucesso.' })
            } else {
                    res.json({ status: result[0], msg: 'Não encontrado.' })
        }
    })
        .catch((err) => {
            res.json(err)
        })
});

app.put('/vendasProdutos/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    VendasProduto.update(alteracao, {
            where: {
                id: parseInt(id),
        },
        })
             .then((result) => {
                if (result[0] === 1) {
                    res.json({ status: result[0], msg: 'Dados alterados com sucesso.' })
            } else {
                    res.json({ status: result[0], msg: 'Não encontrado.' })
        }
    })
        .catch((err) => {
            res.json(err)
        })
});

app.delete('funcionario/:id', (req, res) => {
    const { id } = req.params
     Funcionario.destroy({
           where: { id: parseInt(id) },
       })
           .then((result) => {
               if (result) {
                   res.json({ msg: 'Tarefa excluida com sucesso.' })
               } else {
                   res.json({ msg: 'Tarefa não encontrada.' })
           }
   })
   .catch((err) => {
           res.json(err)
           })
});

//------------------------------------------------------------------------
app.delete('vendas/:id', (req, res) => {
    const { id } = req.params
     Vendas.destroy({
           where: { id: parseInt(id) },
       })
           .then((result) => {
               if (result) {
                   res.json({ msg: 'Tarefa excluida com sucesso.' })
               } else {
                   res.json({ msg: 'Tarefa não encontrada.' })
           }
   })
   .catch((err) => {
           res.json(err)
           })
       });
//------------------------------------------------------------------------
app.delete('produtos/:id', (req, res) => {
    const { id } = req.params
     Produtos.destroy({
           where: { id: parseInt(id) },
       })
           .then((result) => {
               if (result) {
                   res.json({ msg: 'Tarefa excluida com sucesso.' })
               } else {
                   res.json({ msg: 'Tarefa não encontrada.' })
           }
   })
   .catch((err) => {
           res.json(err)
           })
       });
//------------------------------------------------------------------------
app.delete('vendasProdutos/:id', (req, res) => {
    const { id } = req.params
     VendasProduto.destroy({
           where: { id: parseInt(id) },
       })
           .then((result) => {
               if (result) {
                   res.json({ msg: 'Tarefa excluida com sucesso.' })
               } else {
                   res.json({ msg: 'Tarefa não encontrada.' })
           }
   })
   .catch((err) => {
           res.json(err)
           })
       });
//------------------------------------------------------------------------
