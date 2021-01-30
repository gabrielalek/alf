import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRespostas1611857391221
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alunos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'gabarito',
            type: 'varchar',
          },
          {
            name: 'prova',
            type: 'varchar',
          },
          {
            name: 'aluno',
            type: 'varchar',
          },
          {
            name: 'questao',
            type: 'varchar',
          },
          {
            name: 'gabarito',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('alunos');
  }
}
