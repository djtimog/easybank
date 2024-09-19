import Link from "next/link";
export default function Header() {
    return(
        <>
            <header>
                <nav>
                    <div>
                        <Link href={"/"}>easy bank</Link>
                    </div>
                    <div>
                        <ul>
                            <li><Link href={"/"} className="" >Home</Link></li>
                            <li><Link href={"/"}>About</Link></li>
                            <li><Link href={"/"}>Contact</Link></li>
                            <li><Link href={"/"}>Blogs</Link></li>
                            <li><Link href={"/"}>Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link href={"/"}>Request Invite</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}