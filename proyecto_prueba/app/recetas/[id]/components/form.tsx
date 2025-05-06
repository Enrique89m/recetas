"use client"

import { Categoria, Ingrediente } from "@prisma/client"
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation";

export default function Form({ receta, modo = "crear" } : { receta?: any; modo?: "crear" | "editar"}){

const [nombre, setNombre] = useState("")
const [preparacion, setPreparacion] = useState("")
const [categorias, setCategorias] = useState <Categoria[]>([])
const [ingredientes, setIngredientes] = useState <Ingrediente[]>([])
const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState<string[]>([])
const [categoriaSeleccionada, setCategoriaSeleccinada] = useState ("")
const router = useRouter()


const handleSubmit = () => {

    console.log("Entra")
    const objeto = {
        nombre, 
        preparacion, 
        categoria: categoriaSeleccionada, 
        ingredientes: ingredientesSeleccionados
    }

    const url = modo === "editar" ? `/api/recetas/${receta.id}` : "/api/recetas"
    const method = modo === "editar" ? "PUT" : "POST"

    fetch(url, {
        method,
        body: JSON.stringify(objeto)
    }).then(async (response) => {
        if (response.ok){
            const respuesta = await response.json()
            router.push("/recetas")
            console.log(respuesta)
        }
    })

}

useEffect(() => {

    if (modo === "editar" && receta) {
        setNombre(receta.nombre)
        setPreparacion(receta.preparacion)
        setCategoriaSeleccinada(receta.idCategoria.toString())
        setIngredientesSeleccionados(receta.recetasIngredientes.map((ingrediente: any) => ingrediente.idIngrediente.toString()) || [])
    }

}, [receta, modo]);

useEffect(() => {

    // (async function () {
    //     const fetchIngredientes = fetch("/api/ingredientes")
    //     const fetchCategorias = fetch("/api/ingredientes")
        
    //     const result = await Promise.all([fetchIngredientes, fetchCategorias])

    //     if (result[0].ok) {
    //         setIngredientes((await result[0].json()).ingredientes)
    //     }

    //     if (result[1].ok) {
    //         setCategorias((await result[1].json()).categorias)
    //     }
        

    // })()

    fetch("/api/ingredientes").then(async (response) => {

        if (response.ok){

            setIngredientes((await response.json()).ingredientes)
            console.log("Ingredientes actualizados")
        }
    } )


    fetch("/api/categorias").then(async (response) => {
        if (response.ok){

            const categorias = (await response.json()).categorias
            setCategorias(categorias)

            if (categorias.length > 0 && categoriaSeleccionada === "") {
                setCategoriaSeleccinada(categorias[0].id.toString())
            }
        }
    })
    
}, [])

    return(<>

        <h2 className="text-2xl mb-4">
            {modo === "editar" ? "Editar receta" : "Crear nueva receta"}
        </h2>
        <form name="crearReceta">
            <label className="mr-2">Nombre</label>
            <input value={nombre} className="border-2" type="text" onChange={(event) => setNombre(event.target.value)}/>
            <br/>
            <label className="mr-2">Ingredientes</label>
            <select value={ingredientesSeleccionados} className="border-2" multiple onChange={(event) => {
                const nuevosIngredientes = ingredientesSeleccionados

                if (nuevosIngredientes.some((ingrediente) => ingrediente == event.target.value)) {
                    const indexOf = nuevosIngredientes.indexOf(event.target.value)
                    nuevosIngredientes.splice(indexOf, 1)
                }else {
                    nuevosIngredientes.push(event.target.value)
                }

                setIngredientesSeleccionados(nuevosIngredientes)
                console.log(nuevosIngredientes)
            }}>
                {
                    ingredientes.map(({id, nombre}) => {
                        return <option value={id} key={id}>{nombre}</option>
                    })
                } 
                
            </select>
            <br/>
            <label className="mr-2">Preparación</label>
            <input value={preparacion} className="border-2" type="text" onChange={(event) => setPreparacion(event.target.value)}/>
            <br/>
            <label className="mr-2">Categoria</label>
            <select value={categoriaSeleccionada} className="border-2" onChange={(event) => setCategoriaSeleccinada(event.target.value)}>
                {
                    categorias.map(({id, nombre}) => {
                        return <option value={id} key={id}>{nombre}</option>
                    })
                } 
                
            </select>
            <button form="crearReceta" type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>{modo === "editar" ? "Editar" : "Crear"}</button>
        </form>


    </>
    )

}