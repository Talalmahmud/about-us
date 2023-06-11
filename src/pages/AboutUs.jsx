import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";

const AboutUs = () => {
    return (
        <div>
            {" "}
            <div>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <Container>
                    <div className="py-6 flex flex-col justify-start gap-6 w-3/5">
                        <h1 className=" text-6xl font-bold ">About Us</h1>
                        <p>
                            Desh Career is Career based newsletter in Bengali
                            language. This newsletter has published weekly. This
                            is published in every Saturday at 12.00 PM.
                        </p>
                        <p>We focus on Career trend, news, smart job etc.</p>
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
        </div>
    );
};

export default AboutUs;
