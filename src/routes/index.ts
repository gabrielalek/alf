import { Router } from 'express';
import { inicializarAlunos } from './RoutesAlunos';
import { inicializarGabaritos } from './RoutesGabaritos';
import { inicializarProvas } from './RoutesProvas';
import { inicializarQuestoes } from './RoutesQuestoes';
import { inicializarRespostas } from './RoutesRespostas';

const routes = Router();
inicializarAlunos(routes);
inicializarGabaritos(routes);
inicializarProvas(routes);
inicializarQuestoes(routes);
inicializarRespostas(routes);
export default routes;
