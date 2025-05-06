-- CreateTable
CREATE TABLE "Receta" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "preparacion" TEXT NOT NULL,
    "idCategoria" INTEGER NOT NULL,

    CONSTRAINT "Receta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Ingrediente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecetasIngredientes" (
    "idReceta" INTEGER NOT NULL,
    "idIngrediente" INTEGER NOT NULL,

    CONSTRAINT "RecetasIngredientes_pkey" PRIMARY KEY ("idReceta","idIngrediente")
);

-- AddForeignKey
ALTER TABLE "Receta" ADD CONSTRAINT "Receta_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetasIngredientes" ADD CONSTRAINT "RecetasIngredientes_idReceta_fkey" FOREIGN KEY ("idReceta") REFERENCES "Receta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetasIngredientes" ADD CONSTRAINT "RecetasIngredientes_idIngrediente_fkey" FOREIGN KEY ("idIngrediente") REFERENCES "Ingrediente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
