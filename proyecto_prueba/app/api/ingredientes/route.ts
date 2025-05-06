import { prisma } from "@/app/lib/prisma";
import { Ingrediente } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import {NextRequest, NextResponse} from "next/server";

type Response = {ingredientes:Ingrediente[]}

async function handler(req: NextApiRequest, res: NextApiResponse <Response>){

    const ingredientes = await prisma.ingrediente.findMany()

    console.log (ingredientes)
    return NextResponse.json({ ingredientes})


}
export {handler as GET}



export async function POST (req: NextRequest) {
    const { nombre } = await req.json();

    if (!nombre) {
        return NextResponse.json({ error: "No se encontrado" });
    }

    const nuevoIngrediente = await prisma.ingrediente.create({
        data: {
            nombre : nombre.trim()
        },
    });

    return NextResponse.json(nuevoIngrediente);
}

