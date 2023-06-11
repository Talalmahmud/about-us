import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const ContactUs = () => {
    return (
        <div>
            {" "}
            <div>
                <Helmet>
                    <title>Contact us</title>
                </Helmet>
                <Container>
                    <div className="py-6 flex flex-col justify-start gap-6 w-3/5">
                        <h1 className=" text-6xl font-bold ">Contract Us</h1>

                        <p>
                            If you want to contact us: you can send an email to
                            contact.deshcareer@gmail.com
                        </p>
                        <p>
                            If you want to meet with us, you can come to our
                            office based on an appointment.
                        </p>
                        <p>Our Office address:</p>
                        <p>House: 13/3,</p>
                        <p>Road: 2,</p>
                        <p>Shyamoly, Dhaka-1207</p>
                        <p>+8801880811047</p>
                    </div>
                </Container>
            </div>
            ContactUs
        </div>
    );
};

export default ContactUs;
