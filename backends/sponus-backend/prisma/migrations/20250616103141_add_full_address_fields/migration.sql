/*
  Warnings:

  - You are about to drop the column `billingAddress` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `postalAddress` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "billingAddress",
DROP COLUMN "postalAddress",
ADD COLUMN     "addressNumber" TEXT,
ADD COLUMN     "billingAddressNumber" TEXT,
ADD COLUMN     "billingCity" TEXT,
ADD COLUMN     "billingCountry" TEXT,
ADD COLUMN     "billingPostalCode" TEXT,
ADD COLUMN     "billingRegionOrState" TEXT,
ADD COLUMN     "billingStreetName" TEXT,
ADD COLUMN     "billingStreetType" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "regionOrState" TEXT,
ADD COLUMN     "streetName" TEXT,
ADD COLUMN     "streetType" TEXT;
