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
            <div className="d-md-flex justify-content-md-between py-4 px-sm-5 px-md-2">
                    <div className="d-flex flex-column justify-content-around ps-md-4 ps-lg-5 text-center">
                        <div className="mb-4 mb-md-0">
                            <Link href={"/"} className="">
                                <Image src={logo.src} alt="easy bank logo" className="img-fluid w-auto" width={2} height={1} />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-around w-50 w-md-100 align-self-center mb-5 mb-md-0">
                            <Image src={facebookIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={youtubeIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={twitterIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={pinterestIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                            <Image src={instagramIcon}  alt="facebook" className="img-fluid" width={10} height={10} />
                        </div>
                    </div>
                    <div className={`text-center`}>
                        <ul className={`nav flex-column`}>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-white">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-white">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-white">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`text-center mb-4 mb-md-0`}>
                        <ul className={`nav flex-column`}>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-white">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-white">Support</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={"/"} className="nav-link text-white">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pe-md-4 pe-lg-5 d-flex flex-column justify-content-md-around text-center">
                        <Link href={"/"} className="nav-link px-4 py-2 bg-primary-gradient rounded-pill text-white mb-3 align-self-center align-self-md-end" style={{width: "fit-content"}}><b>Request Invite</b></Link>
                        <p className="text-secondary">©Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}