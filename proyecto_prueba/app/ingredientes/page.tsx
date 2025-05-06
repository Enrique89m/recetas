'use client'

import Table from "@/app/ingredientes/components/table";
import Inputtext from "@/app/ingredientes/components/inputtext";
import Button from "@/app/ingredientes/components/button";
import {useState} from "react";

export default function Page() {

    const [nombre, setNombre] = useState("")

    const handleAddIngrediente = async () => {
        if (!nombre.trim()) return

        const response = await fetch("/api/ingredientes", {
            method: "POST",
            body: JSON.stringify({nombre}),
        })

        if (response.ok) {
            const nuevo = await response.json()
            console.log("Ingrediente creado:", nuevo)
            setNombre("")
            location.reload()
        }
    }

    return(
        <>

            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Listado de Ingredientes</h1>

                <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <Table actualizar={true} />
                    <div className="flex gap-4">
                        <Inputtext
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <Button onClick={handleAddIngrediente} />
                    </div>
                </div>
            </div>
        </>


    )

}