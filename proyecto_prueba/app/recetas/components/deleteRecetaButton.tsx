
import {deleteReceta} from "@/app/lib/actions";

export function DeleteRecetaButton({id} : {id:number}) {


    return (
        <form action={async () => {
            'use server'
            await deleteReceta(id)
        }}>
            <button type="submit" className="ml-2 px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition">Eliminar</button>
        </form>
    )

}