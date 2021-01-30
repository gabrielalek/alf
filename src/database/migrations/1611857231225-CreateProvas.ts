import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProvas1611857231225 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'provas',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nota',
            type: 'varchar',
          },
          {
            name: 'materia',
            type: 'varchar',
          },
          {
            name: 'aluno',
            type: 'varchar',
          },
          {
            name: 'resposta',
            type: 'varchar',
          },
          {
            name: 'questao',
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
    await queryRunner.dropTable('provas');
  }
}
