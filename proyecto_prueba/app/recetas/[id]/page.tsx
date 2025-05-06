import Form from "./components/form"

export default async function CrearReceta({ params }: { params: Promise <any> }) {

    const { id } = await params;

    console.log("Crear receta", id)
    return(
        <>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">Formulario de Creación</h1>
                <Form />
            </div>
        </>
    ) 


}