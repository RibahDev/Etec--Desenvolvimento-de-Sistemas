const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/add-user', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO usuarios (usuario_nome, usuario_email, usuario_senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    res.send('Usuário inserido com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao inserir o usuário: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});