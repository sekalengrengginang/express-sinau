/*
  Warnings:

  - Added the required column `categories` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `writer` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `categories` VARCHAR(191) NOT NULL,
    ADD COLUMN `writer` VARCHAR(191) NOT NULL;
