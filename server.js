const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'fiesc_db',
  password: 'mysecretpassword',
  port: 5432,
});
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get('/tarefas', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tarefas ORDER BY id ASC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
app.post('/tarefas', async (req, res) => {
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ error: 'Descrição é obrigatória' });
  }
  try {
    const novaTarefa = await pool.query(
      'INSERT INTO tarefas (descricao) VALUES ($1) RETURNING *',
      [descricao]
    );
    res.status(201).json(novaTarefa.rows[0]);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
app.put('/tarefas/:id', async (req, res) => {
  const { id } = req.params;
  const { concluida } = req.body;

  try {
    const tarefaAtualizada = await pool.query(
      'UPDATE tarefas SET concluida = $1 WHERE id = $2 RETURNING *',
      [concluida, id]
    );

    if (tarefaAtualizada.rowCount === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.status(200).json(tarefaAtualizada.rows[0]);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
app.delete('/tarefas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tarefas WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
