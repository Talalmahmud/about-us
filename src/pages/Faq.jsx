import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <Container>
                <div className="py-6 flex flex-col justify-start gap-4 w-3/5">
                    <h1 className=" text-6xl font-bold ">FAQ's</h1>
                    <h1 className=" text-3xl">
                        How can i subsribe Desh Career Email?
                    </h1>
                    <p>
                        You can subscribe this newsletter from . You input you
                        email, then follow instruction. After email
                        confirmation, your email address is added in our
                        database.{" "}
                    </p>
                    <h1 className=" text-3xl">
                        I am a subscriber of Desh Career, but I don't find your
                        email. Why?
                    </h1>
                    <p>
                        Please check your email. May be our email goes to
                        Promotion tab. If you find our email in this tab, please
                        move it to primary tab. Than you will find this email in
                        primary tab.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Faq;
