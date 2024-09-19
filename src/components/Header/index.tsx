"use client";
import Link from "next/link";
import logo from "@/images/logo.svg"
import Image from "next/image";
import { useState } from 'react';
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const switchToggle = () =>{
        setToggle(!toggle);
    }
    return(
        <>
            <header className="py-3 position-sticky w-100">
                <nav className="d-flex justify-content-around">
                    <div className="align-self-center">
                        <Link href={"/"} className="nav-link align-self-center">
                            <Image src={logo.src} alt="easy bank logo" className="img-fluid w-100" width={`1`} height={`1`} />
                        </Link>
                    </div>
                    <div className="d-block d-md-none">
                        <div onClick={switchToggle}>
                            <i className={`bi bi-${toggle ? 'x' : 'list'} h2`}></i>
                        </div>
                    </div>
                    <div className={`${toggle ? 'position-absolute' : 'd-none'} d-md-block align-self-center `}>
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
                    <div className="d-none d-md-block align-self-center">
                        <Link href={"/"} className="nav-link px-4 py-2 bg-primary-gradient rounded-pill text-white"><b>Request Invite</b></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}