import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Aluno from './Alunos';
import Gabarito from './Gabaritos';
import Prova from './Provas';
import Questao from './Questoes';

@Entity('respostas')
class Resposta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Gabarito, gabarito => gabarito.respostas)
  gabarito: Gabarito;

  @ManyToOne(() => Prova, prova => prova.respostas)
  prova: Prova;

  @ManyToOne(() => Aluno, aluno => aluno.respostas)
  aluno: Aluno;

  @ManyToOne(() => Questao, questao => questao.respostas)
  questao: Questao;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Resposta;
