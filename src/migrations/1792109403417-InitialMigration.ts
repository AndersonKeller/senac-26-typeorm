import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1792109403417 implements MigrationInterface {
    name = 'InitialMigration1792109403417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "status" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
    }

}
