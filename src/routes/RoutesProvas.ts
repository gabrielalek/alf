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

  routes.post('/provas', (request, response) => {
    let prova = new Prova();

    const alunoExiste = alunos.find(x => x.id === request.body.alunoId);

    if (!alunoExiste) return response.json({ erro: 'Aluno não existe' });

    const gabaritoExiste = gabaritos.find(
      x => x.id === request.body.gabaritoId,
    );

    if (!gabaritoExiste) return response.json({ erro: 'Gabarito não existe' });

    prova = request.body;
    prova.id = uuidv4();

    provas.push(prova);

    return response.json(prova);
  });
};

export default provas;
