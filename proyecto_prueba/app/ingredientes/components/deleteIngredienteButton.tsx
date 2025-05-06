import {deleteIngrediente} from "@/app/lib/actions";

export function DeleteIngredienteButton ({id} : {id:number}) {
    return (

        <form action={async () => {

            await deleteIngrediente(id)
        }}>
            <button type="submit" className="ml-2 px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition">Eliminar</button>
        </form>
    )
}