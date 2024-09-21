"use client";
import Link from "next/link";
import logo from "@/images/logo.svg"
import Image from "next/image";
import { useState } from 'react';
import hamburgerIcon from "@/images/icon-hamburger.svg";
import closeIcon from "@/images/icon-close.svg";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const switchToggle = () =>{
        setToggle(!toggle);
    }
    return(
        <>
            <header className="py-3 position-sticky w-100 bg-inherit">
                <nav className="d-flex justify-content-between h-2vh">
                    <div className="ps-4 ps-md-2 ps-lg-5 align-self-center">
                        <Link href={"/"} className="nav-link align-self-center">
                            <Image src={logo.src} alt="easy bank logo" className="img-fluid w-100" width={`1`} height={`1`} />
                        </Link>
                    </div>
                    <div className="d-block d-md-none pe-4">
                        <div onClick={switchToggle}>
                            {/* <i className={`bi bi-${toggle ? 'x' : 'list'} h2`}></i> */}
                            <Image src={toggle ? closeIcon : hamburgerIcon} alt={`${toggle ? "closeIcon" : "hamburgerIcon"} icon`} className="img-fluid w-100" width={`1`} height={`1`} />
                        </div>
                    </div>
                    <div className={`${toggle ? 'position-absolute w-100 mt-5 d-flex justify-content-center full-vh bg-blur' : 'd-none'} d-md-block `}>
                        <ul className={`nav ${toggle ? 'position-absolute mt-5 d-flex flex-column bg-bright rounded text-center p-5 d-md-flex' : 'd-none d-md-flex'}`}>
                            <li className="nav-item px-5 px-md-0">
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
                    <div className="d-none d-md-block align-self-center pe-2 pe-lg-5">
                        <Link href={"/"} className="nav-link px-4 py-2 bg-primary-gradient rounded-pill text-white"><b>Request Invite</b></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}