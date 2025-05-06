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
            <div>
                <div  className="text-3xl pb-6">Formulario de Edición</div>

                <Form receta={receta} modo="editar"/>
            </div>

        </>
    )

}

