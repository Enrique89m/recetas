import { prisma } from "@/app/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

    const id = parseInt(params.id)
    const { nombre, preparacion, categoria, ingredientes } = await req.json()

    const recetaActualizada = await prisma.receta.update({
        where: { id },
        data: {
            nombre,
            preparacion,
            idCategoria: parseInt(categoria),
        },
    })

    await prisma.recetasIngredientes.deleteMany({
        where: { idReceta: id },
    })

    await Promise.all(
        ingredientes.map((idIngrediente: string) =>
            prisma.recetasIngredientes.create({
                data: {
                    idReceta: id,
                    idIngrediente: parseInt(idIngrediente),
                },
            })
        )
    )

    return NextResponse.json({ receta: recetaActualizada })
}
