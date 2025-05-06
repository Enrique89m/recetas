import { ReactNode } from "react"
import Link from "next/link"

interface ButtonProps {
    children: ReactNode
    href?: string
    action?: () => void
    method?: "POST" | "GET"
}

export function Button({ children, href, action, method = "POST" }: ButtonProps) {
    const className =
        "flex h-10 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"

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
