"use client";
import Link from "next/link";
import logo from "@/images/logo.svg"
import Image from "next/image";
import facebookIcon from "@/images/icon-facebook.svg";
import youtubeIcon from "@/images/icon-youtube.svg";
import twitterIcon from "@/images/icon-twitter.svg";
import pinterestIcon from "@/images/icon-pinterest.svg";
import instagramIcon from "@/images/icon-instagram.svg";
import { useState } from 'react';
export default function Footer() {
    return(
        <>
            <footer>
            <div className="d-flex justify-content-around pt-5">
                    <div className="d-flex flex-column justify-content-around">
                        <div>
                            <Link href={"/"} className="">
                                <Image src={logo.src} alt="easy bank logo" className="img-fluid w-100" width={`1`} height={`1`} />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-around">
                            <Image src={facebookIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={youtubeIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={twitterIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={pinterestIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={instagramIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                        </div>
                    </div>
                    <div className={``}>
                        <ul className={`nav flex-column flex-wrap`}>
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
                    <div className="">
                        <Link href={"/"} className="nav-link px-4 py-2 bg-primary-gradient rounded-pill text-white"><b>Request Invite</b></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}