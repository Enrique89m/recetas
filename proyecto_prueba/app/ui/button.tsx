import { ReactNode } from "react"
import Link from "next/link"

interface ButtonProps {
    children: ReactNode
    href?: string
    action?: () => void
    method?: "POST" | "GET"
    className?: string;
}

export function Button({ children, href, action, method = "POST" }: ButtonProps) {
    const className =
        "ml-2 px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"

    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        )
    }

    if (action) {
        return (
            <form action={action} method={method}>
                <button type="submit" className={className}>
                    {children}
                </button>
            </form>
        )
    }

    if (typeof window !== 'undefined' && typeof action === 'function') {
        return (
            <button onClick={action} className={className}>
                {children}
            </button>
        )
    }

    return (
        <button className={className} disabled>
            {children}
        </button>
    )
}
