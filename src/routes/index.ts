import { Router } from 'express';
import Aluno from '../models/Alunos';
import Gabarito from '../models/Gabaritos';
import Prova from '../models/Provas';
import Questao from '../models/Questoes';
import Resposta from '../models/Respostas';

const routes = Router();

const alunos: Aluno[] = [];

routes.get('/alunos', (request, response) => {
  return response.json(alunos);
});

routes.post('/alunos', (request, response) => {
  const { id, name, gabaritos, respostas, provas } = request.body;

  const aluno = new Aluno();

  aluno.id = id;
  aluno.name = name;
  aluno.gabaritos = gabaritos;
  aluno.respostas = respostas;
  aluno.provas = provas;

  alunos.push(aluno);

  return response.json(aluno);
});

/* routes.put('/alunos/:id', (request, response) => {
  const { id } = request.params;
  const { name, provider } = request.body;

  const alunoIndex = alunos.findIndex(project => project.id === id);

  if (alunoIndex < 0) {
    return response.status(400).json({ error: 'Aluno não encontrado.' });
  }

  const aluno = {
    id,
    name,
    provider,
  };

  alunos[alunoIndex] = aluno;

  return response.json(aluno);
}); */

const gabaritos: Gabarito[] = [];

routes.get('/gabaritos', (request, response) => {
  return response.json(gabaritos);
});

routes.post('/gabaritos', (request, response) => {
  const { id, respostas, questoes, provas, aluno } = request.body;

  const gabarito = new Gabarito();

  gabarito.id = id;
  gabarito.respostas = respostas;
  gabarito.questoes = questoes;
  gabarito.provas = provas;
  gabarito.aluno = aluno;

  gabaritos.push(gabarito);

  return response.json(gabarito);
});

const provas: Prova[] = [];

routes.get('/provas', (request, response) => {
  return response.json(provas);
});

routes.post('/provas', (request, response) => {
  const { id, gabarito, questoes, aluno, respostas } = request.body;

  const prova = new Prova();

  prova.id = id;
  prova.gabarito = gabarito;
  prova.questoes = questoes;
  prova.aluno = aluno;
  prova.respostas = respostas;

  provas.push(prova);

  return response.json(prova);
});

const questoes: Questao[] = [];

routes.get('/questoes', (request, response) => {
  return response.json(questoes);
});

routes.post('/questoes', (request, response) => {
  const { id, peso, acerto, prova, gabarito, respostas } = request.body;

  const questao = new Questao();

  questao.id = id;
  questao.peso = peso;
  questao.acerto = acerto;
  questao.prova = prova;
  questao.gabarito = gabarito;
  questao.respostas = respostas;

  questoes.push(questao);

  return response.json(questao);
});

const respostas: Resposta[] = [];

routes.get('/respostas', (request, response) => {
  return response.json(respostas);
});

routes.post('/respostas', (request, response) => {
  const { id, gabarito, prova, aluno, questao } = request.body;

  const resposta = new Resposta();

  resposta.id = id;
  resposta.gabarito = gabarito;
  resposta.prova = prova;
  resposta.aluno = aluno;
  resposta.questao = questao;

  respostas.push(resposta);

  return response.json(resposta);
});

export default routes;
