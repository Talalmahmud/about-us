import React from "react";
import { headerData } from "../../data/headerData";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col gap-2 text-[16px] lg:text-[16px] md:text-[10px] transition md:flex-row justify-center items-center md:gap-4  ">
            {headerData.map((item) => (
                <div key={item.id}>
                    <Link
                        to={item.routLink}
                        className={`${
                            location.pathname === item.routLink
                                ? "text-red-500"
                                : "text-black"
                        } font-bold `}
                    >
                        {item.name}
                    </Link>
                </div>
            ))}
            <Link
                to="/"
                className="font-bold sm:lg:text-[18px] md:text-[14px]  bg-red-600 px-4 py-2 text-white rounded-md"
            >
                Join Now
            </Link>
        </div>
    );
};

export default NavMenu;
