-- DropForeignKey
ALTER TABLE "RecetasIngredientes" DROP CONSTRAINT "RecetasIngredientes_idReceta_fkey";

-- AddForeignKey
ALTER TABLE "RecetasIngredientes" ADD CONSTRAINT "RecetasIngredientes_idReceta_fkey" FOREIGN KEY ("idReceta") REFERENCES "Receta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
