import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
    {
        label: "Features",
        href: "/features"
    },
    {
        label: "How It Works",
        href: "/how-it-works"
    },
    {
        label: "Why Choose Us",
        href: "/why-choose-us"
    },
    {
        label: "Reviews",
        href: "/reviews"
    },
    {
        label: "FAQ",
        href: "/faq"
    },  
]

export default function Navbar() {
    return (
        <div className="w-full flex items-center justify-center py-4 fixed top-0 left-0 z-50 border-b border-slate-200">
            <nav className="max-w-7xl w-full flex items-center justify-between">
                <h1 className="text-2xl font-bold">Vitalink</h1>
                <div className="flex items-center gap-x-8">
                    {navItems.map(item => {
                        return (
                            <Link key={item.label} href={item.href}>
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
                <Button>
                    Sign In
                </Button>
            </nav>
        </div>
    )
}