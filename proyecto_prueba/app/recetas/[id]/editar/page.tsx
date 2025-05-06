import Form from "@/app/recetas/[id]/components/form";
import { prisma } from "@/app/lib/prisma";

export default async function EditarReceta({params}: {params : { id: string }}) {

    const receta = await prisma.receta.findUnique({
        where: { id: parseInt(params.id) },
        include: {
            recetasIngredientes: true,
        },
    })

    return (
        <>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">Formulario de Edición</h1>
                <Form receta={receta} modo="editar" />
            </div>
        </>
    )
}

