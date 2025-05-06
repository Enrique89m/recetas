import { prisma } from "@/app/lib/prisma";
import { Categoria } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Response = {categorias:Categoria[]}

async function handler(req: NextApiRequest, res: NextApiResponse <Response>){

    const categorias = await prisma.categoria.findMany()

    return NextResponse.json({ categorias})

}

export {handler as GET}