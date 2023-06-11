import React, { useState } from "react";
import Container from "../Container";
// import { Link, useLocation } from "react-router-dom";
// import { headerData } from "../../data/headerData";
import { FcMenu } from "react-icons/fc";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    // const [active, setActive] = useState("");
    // useEffect(() => {
    //     setActive(location.pathname);
    // }, [location]);

    // const handleClick = useCallback((item) => {
    //     setActive(item.routLink);
    // }, []);

    return (
        <div className=" w-full sticky shadow-md">
            <Container>
                <div className="flex flex-row justify-between items-center">
                    <Link to={"/"}>
                        <div className="w-[200px] h-[90px] ">
                            <img
                                src="https://deshcareer.com/logo/short-logo.png"
                                alt=""
                                className=" h-full w-full"
                            />
                        </div>
                    </Link>
                    <div
                        className="px-2 py-1 cursor-pointer rounded-md border-2 md:hidden"
                        onClick={() => setToggle(!toggle)}
                    >
                        <FcMenu size={30} />
                    </div>

                    <div className="hidden md:flex">
                        <NavMenu />
                    </div>
                </div>
                {toggle && (
                    <div onClick={() => setToggle(!toggle)}>
                        <NavMenu />
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Navbar;
