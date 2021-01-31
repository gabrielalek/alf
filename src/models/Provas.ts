import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Aluno from './Alunos';
import Gabarito from './Gabaritos';
import Questao from './Questoes';
import Resposta from './Respostas';

@Entity('provas')
class Prova {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nota: number;

  @Column()
  materia: string;

  @OneToMany(() => Questao, questao => questao.prova)
  questoes: Questao[];

  @OneToMany(() => Resposta, resposta => resposta.prova)
  respostas: Resposta[];

  @ManyToOne(() => Gabarito, gabarito => gabarito.provas)
  gabarito: Gabarito;

  @Column()
  gabaritoId: string;

  @ManyToOne(() => Aluno, aluno => aluno.provas)
  aluno: Aluno;

  @Column()
  alunoId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Prova;

// class Gabarito extends Prova,
