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
            <div className="d-flex flex-column flex-md-row justify-content-md-between py-4 px-sm-5 px-md-0">
                    <div className="d-flex flex-column justify-content-around ps-md-2 ps-lg-5">
                        <div>
                            <Link href={"/"} className="">
                                <Image src={logo.src} alt="easy bank logo" className="img-fluid w-md-100" width={`239`} height={`100`} />
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
                    <div className={`text-center mb-3 mb-md-0`}>
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
                    <div className={`text-center mb-3 mb-md-0`}>
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
                    <div className="pe-md-2 pe-lg-5">
                        <Link href={"/"} className="nav-link px-4 py-2 bg-primary-gradient rounded-pill text-white"><b>Request Invite</b></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}