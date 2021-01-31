import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Prova from '../models/Provas';
import alunos from './RoutesAlunos';
import gabaritos from './RoutesGabaritos';

const provas: Prova[] = [];

export const inicializarProvas = (routes: Router): void => {
  routes.get('/provas', (request, response) => {
    return response.json(provas);
  });

  routes.post('/provas', (request: { body: Prova }, response) => {
    let prova = new Prova();

    const alunoExiste = alunos.find(x => x.id === request.body.alunoId);

    if (!alunoExiste) return response.json({ erro: 'Aluno não existe' });

    const gabaritoExiste = gabaritos.find(
      x => x.id === request.body.gabaritoId,
    );

    if (!gabaritoExiste) return response.json({ erro: 'Gabarito não existe' });

    prova = request.body;
    prova.id = uuidv4();

    if (prova.nota < 0 || prova.nota > 10) {
      return response.status(400).json({ error: 'Nota invalida.' });
    }

    provas.push(prova);

    return response.json(prova);
  });

  routes.put('/provas/:id', (request, response) => {
    const { id } = request.params;

    const alunoExiste = alunos.find(x => x.id === request.body.alunoId);

    if (!alunoExiste) return response.json({ erro: 'Aluno não existe' });

    const gabaritoExiste = gabaritos.find(
      x => x.id === request.body.gabaritoId,
    );

    if (!gabaritoExiste) return response.json({ erro: 'Gabarito não existe' });

    const provaIndex = provas.findIndex(prova => prova.id === id);

    if (provaIndex < 0) {
      return response.status(400).json({ error: 'Prova não encontrada.' });
    }

    let prova = new Prova();

    prova = request.body;

    prova.id = id;

    provas[provaIndex] = prova;

    return response.json(prova);
  });

  routes.delete('/provas/:id', (request, response) => {
    const { id } = request.params;

    const provaIndex = provas.findIndex(prova => prova.id === id);

    if (provaIndex < 0) {
      return response.status(400).json({ error: 'Prova não encontrada.' });
    }

    provas.splice(provaIndex, 1);

    return response.json({ id });
  });
};

export default provas;
