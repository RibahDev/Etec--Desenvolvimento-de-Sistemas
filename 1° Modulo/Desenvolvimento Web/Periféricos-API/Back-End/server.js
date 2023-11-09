const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Criar conexão com o banco de dados
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',  // substitua com seu usuário do MySQL
    password : '',    // substitua com sua senha do MySQL
    database : 'RibahPerifericos'  // substitua com o nome do seu banco de dados
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
app.get('/perifericos', (req, res) => {
    let sql = 'SELECT * FROM perifericos';
    db.query(sql, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
});


// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
