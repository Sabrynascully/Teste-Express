
app.get('/usuario', (req, res) => {
    res.status(200).send(dados)
})

app.get('/usuario/:idusuario', (req, res) => {
    let idusuario = req.params.idusuario
    let usuarioretornar = {}
    for (let i of dados) {
        if (i.id == idusuario) {
            usuarioretornar = i
        }
    }
    res.status(200).send(usuarioretornar)
})

app.post('/usuario', (req, res) => {
    let ob = {
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        cpf: req.body.cpf
    }
    dados.push(ob)
    res.status(201).send(ob)
})

app.delete('/usuario/:idusuario', (req, res) => {
    let idusuario = req.params.idusuario
    let posicao = 0
    for (let i of dados) {
        if (i.id == idusuario) {
            break;
        }
        posicao++;
    }
    dados.splice(posicao, 1)
    res.status(204).send();
})

app.put('/usuario/:idusuario', (req, res) => {
    let idusuario = req.params.idusuario
    let usuarioAlterado = {}
    for (let i of dados) {
        if (i.id == idusuario) {
            i.nome = req.body.nome
            i.email = req.body.email
            i.senha = req.body.senha
            i.cpf = req.body.cpf
            usuarioAlterado = i
        }
    }
    res.status(200).send(usuarioAlterado)
})

app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))