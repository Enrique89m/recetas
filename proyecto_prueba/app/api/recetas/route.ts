import { prisma } from "@/app/lib/prisma";
import { Receta } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

async function handler(req: Request){

    const {nombre, preparacion, categoria, ingredientes} = await req.json()


    const nuevaReceta = await prisma.receta.create({
        data: {
            nombre,
            preparacion,
            idCategoria: parseInt(categoria),
        }
    });

    ingredientes.forEach(async (ingrediente: string) => {
        const nuevoRecetaIngrediente = await prisma.recetasIngredientes.create({
            data: {
                idIngrediente: parseInt(ingrediente),
                idReceta: nuevaReceta.id
            }
        })
    })

    return NextResponse.json({receta: nuevaReceta})
}

export {handler as POST}



async function handlerGet(req: Request){


    const recetas = await prisma.receta.findMany()

    console.log (recetas)
    return NextResponse.json(recetas)

}

export {handlerGet as GET}