import {fetchRecetas} from "@/app/lib/actions";
import {Button} from "@/app/ui/button";
import {DeleteRecetaButton} from "@/app/recetas/components/deleteRecetaButton";

export default async function Table(){

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const recetas = await fetchRecetas()


    console.log(recetas)

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Ingredientes</th>
                    <th className="px-4 py-2">Preparación</th>
                    <th className="px-4 py-2">Categoría</th>
                </tr>
                </thead>
                <tbody>
                {recetas.map(receta => {
                    return (<tr key={receta.id}>
                        <td className="border-2 border-light-blue-500 p-2">{receta.nombre}</td>
                        <td className="border-2 border-light-blue-500 p-2">{receta.recetasIngredientes.map((recetaIngrediente) =>{
                            return `${recetaIngrediente.ingrediente.nombre}\n `
                        })}</td>
                        <td className="border-2 border-light-blue-500 p-2">{receta.preparacion}</td>
                        <td className="border-2 border-light-blue-500 p-2">{receta.categoria.nombre}</td>

                        <td>
                            <Button href={`/recetas/${receta.id}/editar`}>Editar</Button>
                        </td>
                        <td>
                            <DeleteRecetaButton id={receta.id} />
                        </td>
                    </tr>)


            })
                }
                </tbody>
            </table>
        </>
    )
}