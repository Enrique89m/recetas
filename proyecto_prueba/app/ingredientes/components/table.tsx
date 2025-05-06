import { useEffect, useState } from "react";
import {DeleteIngredienteButton} from "@/app/ingredientes/components/deleteIngredienteButton";

export default function Table({ actualizar }: { actualizar: boolean }) {
    const [ingredientes, setIngredientes] = useState<any[]>([])

    const cargarIngredientes = async () => {
        const res = await fetch("/api/ingredientes")
        const data = await res.json()
        setIngredientes(data.ingredientes)
    }

    useEffect(() => {
        cargarIngredientes()
    }, [actualizar])

    return (

        <table>
            <thead>
                <tr>
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Nombre</th>
                </tr>
            </thead>
            <tbody>
                {ingredientes.map(ingrediente => {
                    return (
                        <tr key={ingrediente.id}>
                            <td className="border-2 border-light-blue-500 p-2">{ingrediente.id}</td>
                            <td className="border-2 border-light-blue-500 p-2">{ingrediente.nombre}</td>
                            <td>
                                <DeleteIngredienteButton id={ingrediente.id}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}