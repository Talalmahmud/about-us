import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import { HiOutlineMail } from "react-icons/hi";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewsLetter Home Page</title>
            </Helmet>
            <Container>
                <div className="py-6 flex flex-col justify-start items-start gap-4">
                    <h1 className=" text-6xl font-bold w-3/5">
                        Get Smarter about your career
                    </h1>
                    <p className=" text-slate-800 text-[18px]">
                        Get the{" "}
                        <span className=" font-bold">5-minute newsletter</span>{" "}
                        keeping about smart career
                    </p>
                    <div className=" flex shadow-md gap-6 items-center px-2 py-4 rounded-md md:w-3/5 w-full">
                        <HiOutlineMail size={20} />
                        <div className=" flex items-center gap-2 text-[12px] md:text-[18px] w-full">
                            <input
                                type="text"
                                placeholder="Your E-mail Address"
                                className=" outline-none border-none w-full"
                            />{" "}
                            <button className=" text-white bg-red-600 md:text-[18px] px-4 md:px-10 py-2  rounded-md">
                                Join Free
                            </button>
                        </div>
                    </div>
                    <p className=" w-3/5 text-[18px]">
                        We're committed to your privacy. DashCareer uses the
                        information you provide to contact you about our
                        relevant content and services. You may unsubscribe from
                        these communications at any time. For more information,
                        check out our Privacy Policy.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Home;
