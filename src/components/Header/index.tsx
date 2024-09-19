import Link from "next/link";
export default function Header() {
    return(
        <>
            <header>
                <nav className="d-flex justify-content-around align-content-center">
                    <div>
                        <Link href={"/"} className="nav-link">easy bank</Link>
                    </div>
                    <div className="d-none d-md-block">
                        <ul className="nav">
                            <li className="nav-item disabled">
                                <Link href={"/"} className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link">Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link href={"/"} className="nav-link">Request Invite</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}