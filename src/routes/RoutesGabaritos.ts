import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Gabarito from '../models/Gabaritos';
import alunos from './RoutesAlunos';

const gabaritos: Gabarito[] = [];

export const inicializarGabaritos = (routes: Router): void => {
  routes.get('/gabaritos', (request, response) => {
    return response.json(gabaritos);
  });

  routes.post('/gabaritos', (request: { body: Gabarito }, response) => {
    let gabarito = new Gabarito();

    const alunoExiste = alunos.find(x => x.id === request.body.alunoId);

    if (!alunoExiste) return response.json({ erro: 'Aluno não existe' });

    gabarito = request.body;
    gabarito.id = uuidv4();

    gabaritos.push(gabarito);

    return response.json(gabarito);
  });
};

export default gabaritos;
