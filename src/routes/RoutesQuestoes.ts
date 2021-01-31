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

    if (questao.peso < 0 || !Number.isInteger(questao.peso)) {
      return response.status(400).json({ error: 'Valor invalido' });
    }

    questoes.push(questao);

    return response.json(questao);
  });

  routes.put('/questoes/:id', (request, response) => {
    const { id } = request.params;

    const provaExiste = provas.find(x => x.id === request.body.provaId);

    if (!provaExiste) return response.json({ erro: 'Prova não existe' });

    const gabaritoExiste = gabaritos.find(
      x => x.id === request.body.gabaritoId,
    );

    if (!gabaritoExiste) return response.json({ erro: 'Gabarito não existe' });

    const questaoIndex = questoes.findIndex(questao => questao.id === id);

    if (questaoIndex < 0) {
      return response.status(400).json({ error: 'Questao não encontrada.' });
    }

    let questao = new Questao();

    questao = request.body;

    questao.id = id;

    questoes[questaoIndex] = questao;

    return response.json(questao);
  });

  routes.delete('/questoes/:id', (request, response) => {
    const { id } = request.params;

    const questaoIndex = questoes.findIndex(questao => questao.id === id);

    if (questaoIndex < 0) {
      return response.status(400).json({ error: 'Questao não encontrada.' });
    }

    questoes.splice(questaoIndex, 1);

    return response.json({ id });
  });
};

export default questoes;
