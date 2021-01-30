import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Aluno from './Alunos';
import Prova from './Provas';
import Questao from './Questoes';
import Resposta from './Respostas';

@Entity('gabaritos')
class Gabarito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Resposta, resposta => resposta.gabarito)
  respostas: Resposta[];

  @OneToMany(() => Questao, questao => questao.gabarito)
  questoes: Questao[];

  @OneToMany(() => Prova, prova => prova.gabarito)
  provas: Prova[];

  @ManyToOne(() => Aluno, aluno => aluno.gabaritos)
  aluno: Aluno;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Gabarito;
