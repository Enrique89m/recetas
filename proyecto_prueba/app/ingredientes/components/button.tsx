
type Props = {
    onClick: () => void
}

export default function Button({ onClick}: Props) {

    return (
        <button
            onClick={onClick}
            className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
        >
            Añadir
        </button>
    )


}