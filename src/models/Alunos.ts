import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Gabarito from './Gabaritos';
import Prova from './Provas';
import Resposta from './Respostas';

@Entity('alunos')
class Aluno {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nota: number;

  @OneToMany(() => Gabarito, gabarito => gabarito.aluno)
  gabaritos: Gabarito[];

  @OneToMany(() => Resposta, resposta => resposta.aluno)
  respostas: Resposta[];

  @OneToMany(() => Prova, prova => prova.aluno)
  provas: Prova[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Aluno;
