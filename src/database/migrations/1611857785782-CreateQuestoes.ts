import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateQuestoes1611857785782 implements MigrationInterface {
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
            name: 'peso',
            type: 'integer',
          },
          {
            name: 'acerto',
            type: 'varchar',
          },
          {
            name: 'prova',
            type: 'varchar',
          },
          {
            name: 'gabarito',
            type: 'varchar',
          },
          {
            name: 'resposta',
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
