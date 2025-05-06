export default async function TableSkeleton(){

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
                    <tr>
                        <td className="border-2 border-light-blue-500 p-2"></td>
                        <td className="border-2 border-light-blue-500 p-2"></td>
                        <td className="border-2 border-light-blue-500 p-2"></td>

                        <td className="border-2 border-light-blue-500 p-2"></td>
                        <td className="border-2 border-light-blue-500 p-2"></td>
                        <td className="border-2 border-light-blue-500 p-2"></td>

                        <td className="border-2 border-light-blue-500 p-2"></td>
                        <td className="border-2 border-light-blue-500 p-2"></td>
                        <td className="border-2 border-light-blue-500 p-2"></td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}