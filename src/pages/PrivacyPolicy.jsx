import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="p-4">
            <Helmet>
                <title>Privecy Policy</title>
            </Helmet>
            <Container>
                <div className="py-6 flex flex-col justify-start gap-4 w-3/5">
                    <h1 className=" text-6xl font-bold ">Privacy Policy</h1>
                    <p className=" text-slate-800 text-[16px]">
                        Effective date: April 04, 2023. Bangla Puzzle Limited
                        ("us", "we", or "our") operates the www.deshcareer.com
                        website (the "Service"). This page informs you of our
                        policies regarding the collection, use, and disclosure
                        of personal data when you use our Service and the
                        choices you have associated with that data. Our Privacy
                        Policy for Desh Career is created.
                    </p>
                    <p>
                        We use your data to provide and improve the Service. By
                        using the Service, you agree to this policy's collection
                        and use of information. Unless otherwise defined in this
                        Privacy Policy, terms used in this Privacy Policy have
                        the same meanings as in our Terms and Conditions,
                        accessible from from
                    </p>
                    <Link
                        className=" text-blue-600 "
                        to={"https://www.deshcareer.com"}
                    >
                        www.deshcareer.com
                    </Link>
                    <div>
                        <h2 className=" font-bold py-6">
                            Information Collection And Use
                        </h2>
                        <p>
                            We collect several different types of information
                            for various purposes to provide and improve our
                            Service to you.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 justify-start">
                        <h2 className=" font-bold py-6">
                            Types of Data Collected
                        </h2>
                        <div className="flex flex-col gap-4 justify-start">
                            <p>Personal Data</p>
                            <p>
                                While using our Service, we may ask you to
                                provide us with certain personally identifiable
                                information that can be used to contact or
                                identify you ("Personal Data"). Personally,
                                identifiable information may include, but is not
                                limited to:
                            </p>
                            <ul className=" list-disc">
                                <li>Email address</li>
                                <li>Your mobile number</li>
                                <li>Professional Info</li>
                                <li>Cookies and Usage Data</li>
                            </ul>
                            <p>Usage Data</p>
                            <p>
                                We may also collect information on how the
                                Service is accessed and used ("Usage Data").
                                This Usage Data may include information such as
                                your computer's Internet Protocol address (e.g.
                                IP address), browser type, browser version, the
                                pages of our Service that you visit, the time
                                and date of your visit, the time spent on those
                                pages, unique device identifiers and other
                                diagnostic data.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <p className="pt-10">Tracking & Cookies Data</p>
                            <p>
                                We use cookies and similar tracking technologies
                                to track the activity on our Service and hold
                                certain information.
                            </p>
                            <p>
                                Cookies are files with a small amount of data
                                that may include an anonymous unique identifier.
                                Cookies are sent to your browser from a website
                                and stored on your device. Tracking technologies
                                also used are beacons, tags, and scripts to
                                collect and track information and to improve and
                                analyze our Service.
                            </p>
                            <p>
                                You can instruct your browser to refuse all
                                cookies or to indicate when a cookie is being
                                sent. However, if you do not accept cookies, you
                                may not be able to use some portions of our
                                Service.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <p className="pt-10">Examples of Cookies we use:</p>
                            <ul className=" list-disc">
                                <li>
                                    Session Cookies. We use Session Cookies to
                                    operate our Service.
                                </li>
                                <li>
                                    Preference Cookies. We use Preference
                                    Cookies to remember your preferences and
                                    various settings.
                                </li>
                                <li>
                                    Security Cookies. We use Security Cookies
                                    for security purposes.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 justify-start">
                            <p className="pt-10">Use of Data</p>
                            <p>
                                Desh Career uses the collected data for various
                                purposes:
                            </p>
                            <ul className=" list-disc">
                                <li>To provide and maintain the Service</li>
                                <li>
                                    To notify you about changes to our Service
                                </li>
                                <li>
                                    To allow you to participate in interactive
                                    features of our Service when you choose to
                                    do so
                                </li>
                                <li>To provide customer care and support</li>
                                <li>
                                    To provide analysis or valuable information
                                    so that we can improve the Service
                                </li>
                                <li>To monitor the usage of the Service</li>
                                <li>
                                    To detect, prevent and address technical
                                    issues
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <p>Transfer Of Data</p>
                            <p>
                                Your information, including Personal Data, may
                                be transferred to — and maintained on —
                                computers located outside of your state,
                                province, country, or other governmental
                                jurisdiction where the data protection laws may
                                differ from those of your jurisdiction.
                            </p>
                            <p>
                                If you are located outside Bangladesh and choose
                                to provide information to us, please note that
                                we transfer the data, including Personal Data,
                                to Bangladesh and process it there.
                            </p>
                            <p>
                                Your consent to this Privacy Policy followed by
                                your submission of such information represents
                                your agreement to that transfer.
                            </p>
                            <p>
                                Desh Career will take all steps reasonably
                                necessary to ensure that your data is treated
                                securely and by this Privacy Policy and no
                                transfer of your Personal Data will take place
                                to an organization or a country unless there are
                                adequate controls in place including the
                                security of your data and other personal
                                information.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 pt-8 justify-start">
                            <p className="">Disclosure Of Data</p>
                            <p>Legal Requirements</p>
                            <p>
                                Desh Career may disclose your Data in the good
                                faith belief that such action is necessary to:
                            </p>
                            <ul className=" list-disc">
                                <li>To comply with a legal obligation</li>
                                <li>
                                    To protect and defend the rights or property
                                    of{" "}
                                    <Link to={"https://www.google.com"}>
                                        Bangla Puzzle
                                    </Link>
                                </li>
                                <li>
                                    To prevent or investigate possible
                                    wrongdoing in connection with the Service
                                </li>
                                <li>
                                    To protect the personal safety of users of
                                    the Service or the public
                                </li>
                                <li>To protect against legal liability</li>
                            </ul>
                            <p>Security Of Data</p>
                            <p>
                                The security of your data is important to us,
                                but remember that no method of transmission over
                                the Internet, or method of electronic storage is
                                100% secure. While we strive to use commercially
                                acceptable means to protect your Personal Data,
                                we cannot guarantee its absolute security.
                            </p>
                            <p>Service Providers</p>
                            <p>
                                We may employ third-party companies and
                                individuals to facilitate our Service ("Service
                                Providers"), to provide the Service on our
                                behalf, perform Service-related services, or
                                assist us in analyzing how our Service is used.
                            </p>
                            <p>
                                These third parties have access to your Personal
                                Data only to perform these tasks on our behalf
                                and are obligated not to disclose or use it for
                                any other purpose.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <p className="pt-10">Links To Other Sites</p>
                            <p>
                                Our Service may contain links to other sites
                                that are not operated by us. If you click on a
                                third-party link, you will be directed to that
                                third party's site. We strongly advise you to
                                review the Privacy Policy of every site you
                                visit.
                            </p>
                            <p>
                                We have no control over and assume no
                                responsibility for the content, privacy
                                policies, or practices of any third-party sites
                                or services.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-start">
                            <p className="pt-10">
                                Changes To This Privacy Policy
                            </p>
                            <p>
                                We may update our Privacy Policy from time to
                                time. We will notify you of any changes by
                                posting the new Privacy Policy on this page.
                            </p>
                            <p>
                                We will let you know via email and/or a
                                prominent notice on our Service before the
                                change becomes effective and update the
                                "effective date" at the top of this Privacy
                                Policy.
                            </p>
                            <p>
                                You are advised to review this Privacy Policy
                                periodically for any changes. Changes to this
                                Privacy Policy are effective when they are
                                posted on this page.
                            </p>
                            <p>Contact Us:</p>
                            <p>
                                If you have any questions about this Privacy
                                Policy, please contact us:
                                contact.deshcareer@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
