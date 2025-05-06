'use server'

import { prisma } from "./prisma"
import {redirect} from "next/navigation";

export async function fetchRecetas(){


    const recetas = await prisma.receta.findMany({
        include:{
            recetasIngredientes: {
                include: {
                    ingrediente: {}
                }
            },
            categoria: true
        }
    })

    return recetas

}

export async function deleteReceta(id: number) {
    await prisma.receta.delete(
        {where: {id}}
    )
    redirect("/recetas");
}

export async function fetchIngredientes(){

    const ingredientes = await prisma.ingrediente.findMany({
        include: {
            recetasIngredientes: true
        }
    })

    return ingredientes

}

export async function addIngrediente (id: number, nombre: string) {

    const nuevoIngrediente = await prisma.ingrediente.create({

        data: {
            id: id,
            nombre: nombre
        }
    })

    return nuevoIngrediente

}

export async function deleteIngrediente (id: number) {

    await prisma.recetasIngredientes.deleteMany({where: {idIngrediente: id}})

    await prisma.ingrediente.delete({where: {id}});

    redirect("/ingredientes");
}