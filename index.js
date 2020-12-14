const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CRUD
// Create, Read (All or Single), Update, Delete
// Criar, Ler (Tudo ou Individual), Atualizar e Remover

// [READ] All - Ler todas as mensagens
app.get('/mensagens', (req, res) => {
  res.send('Exibir a lista de mensagens.');
});

// [CREATE] - Criar uma mensagem
app.post('/mensagens', (req, res) => {
  res.send('Criar uma mensagem.');
});

app.listen(3000, () => {
  console.info('Servidor rodando em http://localhost:3000.');
});
