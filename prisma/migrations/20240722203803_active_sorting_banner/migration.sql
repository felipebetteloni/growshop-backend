/*
  Warnings:

  - A unique constraint covering the columns `[is_active,sorting]` on the table `banners` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "banners_is_active_sorting_key" ON "banners"("is_active", "sorting");
