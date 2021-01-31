import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
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

  @Column()
  gabaritoId: string;

  @ManyToOne(() => Prova, prova => prova.respostas)
  prova: Prova;

  @Column()
  provaId: string;

  @ManyToOne(() => Aluno, aluno => aluno.respostas)
  aluno: Aluno;

  @Column()
  alunoId: string;

  @ManyToOne(() => Questao, questao => questao.respostas)
  questao: Questao;

  @Column()
  questaoId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Resposta;
