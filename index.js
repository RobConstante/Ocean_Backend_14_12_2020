const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CRUD
// Create, Read (All or Single), Update, Delete
// Criar, Ler (Tudo ou Individual), Atualizar e Remover

const mensagens = [
  'Essa é a primeira mensagem',
  'Essa é a segunda mensagem'
];

// [READ] All - Ler todas as mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

// [CREATE] - Criar uma mensagem
app.post('/mensagens', (req, res) => {
  const texto = req.body.texto;

  mensagens.push(texto);

  res.send('Mensagem foi criada com sucesso!');
});

app.listen(3000, () => {
  console.info('Servidor rodando em http://localhost:3000.');
});
