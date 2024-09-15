"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const routes = [
    {
        href: "/",
        label: "Convertor"
    },
    {
        href: "/videos",
        label: "Videos"
    },
]

export const NavBar = () => {
    const path = usePathname();
    return (
        <header className="sticky top-0 h-16 border-b bg-background px-4 flex items-center justify-center">
            <nav className="flex gap-4 w-8/12">

                {
                    routes.map(route => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn("text-muted-foreground transition-colors hover:text-foreground", {
                                "text-foreground": route.href === path
                            })}
                        >
                            {route.label}
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}
