import Link from "next/link";
import logo from "@/images/logo.svg"
import Image from "next/image";
export default function Header() {
    return(
        <>
            <header className="py-3 position-sticky w-100">
                <nav className="d-flex justify-content-around">
                    <div className="align-self-center">
                        <Link href={"/"} className="nav-link align-self-center">
                            <Image src={logo.src} alt="easy bank logo" className="img-fluid w-100" width={`1`} height={`1`} />
                        </Link>
                    </div>
                    <div className="d-none d-md-block align-self-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-secondary">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-secondary">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-secondary">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-secondary">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-secondary">Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="align-self-center">
                        <Link href={"/"} className="nav-link px-5 py-3 bg-primary-gradient rounded-pill text-white">Request Invite</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}