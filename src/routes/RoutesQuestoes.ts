import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Questao from '../models/Questoes';
import gabaritos from './RoutesGabaritos';
import provas from './RoutesProvas';

const questoes: Questao[] = [];

export const inicializarQuestoes = (routes: Router): void => {
  routes.get('/questoes', (request, response) => {
    return response.json(questoes);
  });

  routes.post('/questoes', (request, response) => {
    let questao = new Questao();

    const provaExiste = provas.find(x => x.id === request.body.provaId);

    if (!provaExiste) return response.json({ erro: 'Prova não existe' });

    const gabaritoExiste = gabaritos.find(
      x => x.id === request.body.gabaritoId,
    );

    if (!gabaritoExiste) return response.json({ erro: 'Gabarito não existe' });

    questao = request.body;
    questao.id = uuidv4();

    questoes.push(questao);

    return response.json(questao);
  });
};

export default questoes;
