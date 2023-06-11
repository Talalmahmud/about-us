import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
    return (
        <div className=" bg-[#0F0D32] py-[1rem] px-[3.5rem]">
            <Container>
                <div className="flex flex-col gap-6  items-center">
                    <div className="flex items-center justify-center gap-2">
                        <div className="px-1 rounded-md border-2">
                            <Link>
                                <GrFacebookOption
                                    size={20}
                                    className="bg-slate-200  rounded-full"
                                />
                            </Link>
                        </div>
                        <div className="px-1 rounded-md border-2">
                            <Link>
                                <GrYoutube
                                    size={20}
                                    className=" text-slate-200"
                                />
                            </Link>
                        </div>
                        <div className="px-1 rounded-md border-2">
                            <Link>
                                <FaLinkedinIn
                                    size={20}
                                    className=" text-slate-200 "
                                />
                            </Link>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-6 md:flex-row justify-between items-center">
                        <div className="flex flex-col gap-2 ">
                            <Link to="/">
                                <div className="w-[200px] h-[90px]">
                                    <img
                                        src="https://deshcareer.com/logo/short-logo.png"
                                        alt=""
                                        className=" h-full w-full"
                                    />
                                </div>
                            </Link>

                            <p className=" text-slate-400  text-[16px] w-full ">
                                Desh Career is Career based newsletter in
                                Bengali language. This newsletter has published
                                weekly. This is published in every Saturday at
                                12.00 PM.
                            </p>
                        </div>
                        <div className="flex flex-col gap-8 justify-center items-center w-full ">
                            <h2 className="text-2xl text-slate-200">
                                Privacy And Terms
                            </h2>
                            <div className="flex flex-col gap-2 justify-center text-slate-400 text-[18px] items-center">
                                <Link
                                    to={"/privacy"}
                                    className=" hover:text-slate-100"
                                >
                                    Privecy Policy
                                </Link>
                                <Link
                                    to={"/condition"}
                                    className=" hover:text-slate-100"
                                >
                                    Terms Condition
                                </Link>
                                <Link
                                    to={"/faq"}
                                    className=" hover:text-slate-100"
                                >
                                    FAQ
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 justify-center items-center md:items-end w-full ">
                            <h2 className=" text-2xl text-slate-200">
                                Support
                            </h2>
                            <div className="text-slate-400 text-[18px] flex flex-col gap-2 justify-center items-center md:items-end  w-full">
                                <Link
                                    to={"/affiliate"}
                                    className=" hover:text-slate-100"
                                >
                                    Affiliate Link
                                </Link>
                                <Link
                                    to={"/contact"}
                                    className=" hover:text-slate-100 "
                                >
                                    <div className="flex">Contact Us</div>
                                </Link>
                                <Link
                                    to={"/advertise"}
                                    className=" hover:text-slate-100"
                                >
                                    Advertise with us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </Container>{" "}
            <hr />
            <div className="flex flex-col  md:flex-row md:justify-between px-2 pt-2 pb-4 ">
                <p className="text-slate-200 text-[14px] ">
                    © 2023 Newsletter E-mail Service: All Copy right reserved
                </p>
                <div>
                    <div className="flex gap-2 justify-center text-slate-200  md:text-[14px] items-center">
                        <Link to={"/faq"}>Term</Link>
                        <Link to={"/faq"}>Cookies Policy</Link>
                        <Link to={"/faq"}>Terms</Link>
                        <Link to={"/faq"}>Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
