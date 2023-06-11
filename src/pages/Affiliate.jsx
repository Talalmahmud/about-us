import React from "react";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import { HiOutlineMail } from "react-icons/hi";

const Affiliate = () => {
    return (
        <div>
            <Helmet>
                <title>Privecy Policy</title>
            </Helmet>
            <Container>
                <div className="py-6 flex flex-col justify-start gap-4">
                    <h1 className=" text-6xl font-bold w-3/5">
                        Search your Invitation
                    </h1>

                    <div className=" flex shadow-md gap-4 items-center px-2 py-4 rounded-md w-3/5">
                        <HiOutlineMail size={20} />
                        <div className=" flex items-center justify-center w-full">
                            <input
                                type="text"
                                placeholder="Your E-mail Address"
                                className=" outline-none border-none w-full"
                            />{" "}
                            <button className="  text-white bg-red-600 text-[18px] px-10 py-2 rounded-md">
                                JoinFree
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Affiliate;
