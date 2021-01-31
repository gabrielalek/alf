import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Aluno from '../models/Alunos';

const alunos: Aluno[] = [];

export const inicializarAlunos = (routes: Router): void => {
  routes.get('/alunos', (request, response) => {
    return response.json(alunos);
  });

  routes.post('/alunos', (request, response) => {
    if (alunos.length >= 100) {
      return response.status(400).json({ error: 'Limite de alunos atingido.' });
    }
    let aluno = new Aluno();

    aluno = request.body;
    aluno.id = uuidv4();

    alunos.push(aluno);

    return response.json(aluno);
  });

  routes.put('/alunos/:id', (request, response) => {
    const { id } = request.params;

    const alunoIndex = alunos.findIndex(aluno => aluno.id === id);

    if (alunoIndex < 0) {
      return response.status(400).json({ error: 'Aluno não encontrado.' });
    }

    let aluno = new Aluno();

    aluno = request.body;

    aluno.id = id;

    alunos[alunoIndex] = aluno;

    return response.json(aluno);
  });

  routes.delete('/alunos/:id', (request, response) => {
    const { id } = request.params;

    const alunoIndex = alunos.findIndex(aluno => aluno.id === id);

    if (alunoIndex < 0) {
      return response.status(400).json({ error: 'Aluno não encontrado.' });
    }

    alunos.splice(alunoIndex, 1);

    return response.json({ id });
  });

  routes.get('/alunosAprovados', (request, response) => {
    return response.json(alunos.filter(x => x.nota >= 7));
  });
};

export default alunos;
