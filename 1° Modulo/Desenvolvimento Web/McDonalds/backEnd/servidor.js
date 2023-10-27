const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Criar conexão com o banco de dados
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',  // substitua com seu usuário do MySQL
    password : '',    // substitua com sua senha do MySQL
    database : 'mcdonalds'  // substitua com o nome do seu banco de dados
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexão com o banco de dados estabelecida.');
});

const app = express();

// Ativar CORS para todas as rotas
app.use(cors());

// Definir rotas da API
app.get('/lanches', (req, res) => {
    let sql = 'SELECT * FROM lanches';
    db.query(sql, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/lanche/:id', (req, res) => {
    let sql = `
    SELECT
        lanches.lancheNome,
        ingredientes.ingredienteNome,
        ingredientes_lanches.quantidade
    FROM lanches
    INNER JOIN ingredientes_lanches ON lanches.lancheId = ingredientes_lanches.lancheId
    INNER JOIN ingredientes ON ingredientes.ingredienteId = ingredientes_lanches.ingredienteId
    WHERE lanches.lancheId = ${db.escape(req.params.id)}`;

    db.query(sql, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
