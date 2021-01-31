import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Resposta from '../models/Respostas';
import alunos from './RoutesAlunos';
import gabaritos from './RoutesGabaritos';
import provas from './RoutesProvas';
import questoes from './RoutesQuestoes';

const respostas: Resposta[] = [];

export const inicializarRespostas = (routes: Router): void => {
  routes.get('/respostas', (request, response) => {
    return response.json(respostas);
  });

  routes.post('/respostas', (request, response) => {
    let resposta = new Resposta();

    const gabaritoExiste = gabaritos.find(
      x => x.id === request.body.gabaritoId,
    );

    if (!gabaritoExiste) return response.json({ erro: 'Gabarito não existe' });

    const provaExiste = provas.find(x => x.id === request.body.provaId);

    if (!provaExiste) return response.json({ erro: 'Prova não existe' });

    const alunoExiste = alunos.find(x => x.id === request.body.alunoId);

    if (!alunoExiste) return response.json({ erro: 'Aluno não existe' });

    const questaoExiste = questoes.find(x => x.id === request.body.questaoId);

    if (!questaoExiste) return response.json({ erro: 'Questao não existe' });

    resposta = request.body;
    resposta.id = uuidv4();

    respostas.push(resposta);

    return response.json(resposta);
  });
};

export default respostas;
