import Link from "next/link"
export default function DashboardLayout({ children }: LayoutProps<"/dashboard/settings">) {
    return(
        <div>
            <nav>Nav
                <Link href="/dashboard/settings">settings</Link>
            </nav>
            {children}
        </div>
    )
}