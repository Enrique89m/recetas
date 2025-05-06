import Form from "./components/form"

export default async function CrearReceta({ params }: { params: Promise <any> }) {

    const { id } = await params;

    console.log("Crear receta", id)
    return(
        <>
            <div>
                <div  className="text-3xl pb-6">Formulario de Creación</div>

                <Form>
                    
                </Form>
            </div>
        </>
    ) 


}