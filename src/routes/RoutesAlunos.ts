import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Aluno from '../models/Alunos';

const alunos: Aluno[] = [];

export const inicializarAlunos = (routes: Router): void => {
  routes.get('/alunos', (request, response) => {
    return response.json(alunos);
  });

  routes.post('/alunos', (request, response) => {
    let aluno = new Aluno();

    aluno = request.body;
    aluno.id = uuidv4();

    alunos.push(aluno);

    return response.json(aluno);
  });

  routes.put('/alunos/:id', (request, response) => {
    const { id } = request.params;
    const {
      name,
      gabaritos,
      respostas,
      provas,
      created_at,
      updated_at,
    } = request.body;

    const alunoIndex = alunos.findIndex(project => project.id === id);

    if (alunoIndex < 0) {
      return response.status(400).json({ error: 'Aluno não encontrado.' });
    }

    const aluno = {
      id,
      name,
      gabaritos,
      respostas,
      provas,
      created_at,
      updated_at,
    };

    alunos[alunoIndex] = aluno;

    return response.json(aluno);
  });
};

export default alunos;
