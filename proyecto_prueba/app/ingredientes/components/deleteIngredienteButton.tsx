import {deleteIngrediente} from "@/app/lib/actions";

export function DeleteIngredienteButton ({id} : {id:number}) {
    return (

        <form action={async () => {

            await deleteIngrediente(id)
        }}>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Eliminar</button>
        </form>
    )
}