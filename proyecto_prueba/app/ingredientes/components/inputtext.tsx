type Props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Inputtext({ value, onChange} : Props) {

    return (
        <>
            <input
                type="text"
                name="nombre"
                value={value}
                onChange={onChange}
                placeholder="Introduce el ingrediente"
                className="w-auto border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </>
    )

}