-- AlterTable
ALTER TABLE "Taxis" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Taxis_id_seq";

-- AlterTable
CREATE SEQUENCE trajectories_id_seq;
ALTER TABLE "Trajectories" ALTER COLUMN "id" SET DEFAULT nextval('trajectories_id_seq');
ALTER SEQUENCE trajectories_id_seq OWNED BY "Trajectories"."id";
