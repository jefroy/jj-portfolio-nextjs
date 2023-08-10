import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const { name, email, message, subject } = mailData;
    const [error, setError] = useState(null);
    const onChange = (e) =>
        setMailData({ ...mailData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (
            name.length === 0 ||
            email.length === 0 ||
            message.length === 0 ||
            subject.length === 0
        ) {
            setError(true);
            clearError();
        } else {
            emailjs
                .send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // service id
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // template id
                    mailData,
                    process.env.NEXT_PUBLIC_EMAILJS_API_KEY // public api
                )
                .then(
                    (response) => {
                        setError(false);
                        clearError();
                        setMailData({ name: "", email: "", message: "", subject: "" });
                    },
                    (err) => {
                        console.log(err.text);
                    }
                );
        }
    };
    const clearError = () => {
        setTimeout(() => {
            setError(null);
        }, 2000);
    };
    return (
        <section
            id="contactus"
            data-nav-tooltip="Contact Me"
            className="pp-section pp-scrollable section dark-bg"
        >
            <div className="container">
                <div className="title">
                    <h3>Get in touch.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-xl-4 m-15px-tb">
                        <div className="contact-info">
                            <h4>Get in Touch</h4>
                            <p>
                                {"I'm"} always available for opportunities. Feel free to reach out if you have an exciting project in mind.
                            </p>
                            <ul>
                                <li className="media">
                                    <i className="ti-map" />
                                    <span className="media-body">
            1068 Columbus Road, Lange Park, Chaguanas, Trinidad and Tobago.
          </span>
                                </li>
                                <li className="media">
                                    <i className="ti-email" />
                                    <span className="media-body">ajay_sieunarine@hotmail.com</span>
                                </li>
                                <li className="media">
                                    <i className="ti-mobile" />
                                    <span className="media-body">+1 (868) 751-0482</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-8 m-15px-tb">
                        <div className="contact-form">
                            <h4>Say Hello</h4>
                            <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                onChange={(e) => onChange(e)}
                                                value={name}
                                                id="name"
                                                placeholder="Name *"
                                                className={`form-control ${
                                                    error ? (!name ? "invalid" : "") : ""
                                                }`}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                onChange={(e) => onChange(e)}
                                                value={email}
                                                id="email"
                                                placeholder="Email *"
                                                className={`form-control ${
                                                    error ? (!email ? "invalid" : "") : ""
                                                }`}
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                name="subject"
                                                onChange={(e) => onChange(e)}
                                                value={subject}
                                                id="subject"
                                                placeholder="Subject *"
                                                className={`form-control ${
                                                    error ? (!subject ? "invalid" : "") : ""
                                                }`}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
              <textarea
                  name="message"
                  onChange={(e) => onChange(e)}
                  value={message}
                  id="message"
                  placeholder="Your message *"
                  rows={5}
                  className={`form-control ${
                      error ? (!message ? "invalid" : "") : ""
                  }`}
              />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <input
                                                className="px-btn px-btn-theme"
                                                type="submit"
                                                value="Send Message"
                                            />
                                        </div>
                                        <span
                                            id="suce_message"
                                            className="text-success"
                                            style={{
                                                display:
                                                    error !== null ? (!error ? "block" : "none") : "none",
                                            }}
                                        >
              Message Sent Successfully
            </span>
                                        <span
                                            id="err_message"
                                            className="text-danger"
                                            style={{ display: "none" }}
                                        >
              Message Sending Failed
            </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*<div className="col-12">*/}
                    {/*  <div className="google-map">*/}
                    {/*    <div className="embed-responsive embed-responsive-21by9">*/}
                    {/*      <iframe*/}
                    {/*          className="embed-responsive-item"*/}
                    {/*          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"*/}
                    {/*          allowFullScreen=""*/}
                    {/*      />*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};
export default Contact;
