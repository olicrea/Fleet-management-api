/*
  Warnings:

  - You are about to alter the column `plate` on the `Taxis` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Taxis" ALTER COLUMN "plate" SET DATA TYPE VARCHAR(200);

-- CreateTable
CREATE TABLE "Trajectories" (
    "id" INTEGER NOT NULL,
    "taxi_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Trajectories_pkey" PRIMARY KEY ("id")
);
