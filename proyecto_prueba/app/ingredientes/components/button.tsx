
type Props = {
    onClick: () => void
}

export default function Button({ onClick}: Props) {

    return (
        <button
            onClick={onClick}
            className="pt-2 px-4 mt-2 border border-gray-400 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
            Añadir
        </button>
    )


}