import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const Advertise = () => {
    return (
        <div>
            {" "}
            <div>
                <Helmet>
                    <title>Advertise</title>
                </Helmet>

                <Container>
                    <div className="py-6 flex flex-col justify-start gap-6 w-3/5">
                        <h1 className=" text-6xl font-bold ">Advertisement</h1>

                        <p>Our audience age is 20-35 Year.</p>
                        <p>We focus on Career related content.</p>
                        <p>
                            If you want to promote your product to our audience,
                            you can give advertisement, Sponsored Content.
                        </p>
                        <p>
                            Our contact email: contact.deshcareer@gmail.com and
                            phone number: +8801880811047
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Advertise;
