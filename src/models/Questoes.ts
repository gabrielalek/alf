import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Gabarito from './Gabaritos';
import Prova from './Provas';
import Resposta from './Respostas';

@Entity('questoes')
class Questao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  peso: number;

  @Column()
  acerto: string;

  @ManyToOne(() => Prova, prova => prova.questoes)
  prova: Prova;

  @Column()
  provaId: string;

  @ManyToOne(() => Gabarito, gabarito => gabarito.questoes)
  gabarito: Gabarito;

  @Column()
  gabaritoId: string;

  @OneToMany(() => Resposta, resposta => resposta.questao)
  respostas: Resposta[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Questao;
