import Table from "@/app/recetas/components/table";
import {Suspense} from "react";
import TableSkeleton from "@/app/recetas/components/tableSkeleton";
import {Button} from "@/app/ui/button";


export default function Home() {
  return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Listado de Recetas</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <Suspense fallback={<TableSkeleton />}>
            <Table />
          </Suspense>
        </div>

        <div className="flex justify-end mt-6">
          <Button href="/recetas/0">Crear Receta</Button>
        </div>
      </div>
  );
}
