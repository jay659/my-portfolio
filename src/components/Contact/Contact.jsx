import React, { useState, useRef } from "react";

// Styles
import "./contact.css";

//svgs 
import github from "images/github.svg";
import gmail from "images/gmail.svg";
import instagram from "images/instagram.svg";
import linkedin from "images/linkedin.svg";
import location from "images/location.svg";
import email_2 from "images/email-2.svg";

// Email Js
import emailjs from "emailjs-com";

// image

// Components
import { Heading } from "../Heading/Heading";
import Button from "components/Button/Button";

const Contact = () => {
  const INITIAL_VALUES = { email: "", message: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);

  // Email-js
  const form = useRef();

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        `gmail`,
        `template_u5ce0fw`,
        form.current,
        `fYtRDo1clPJbBIfZh`
      );
      console.log("result ", result.text);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <h1>Feel Free to Contact me</h1>
          <div class="social_info wow fadeInUp" data-wow-duration="1.5s">
						<ul>
							<li>
								<div class="logo">
									<a href="https://github.com/Hardly-Human" target="_blank">
                  <img src={linkedin} className="svg" alt="Developer" />
                  </a>
                </div>
              </li>
              <li>
								<div class="logo">
									<a href="https://github.com/Hardly-Human" target="_blank">
                  <img src={gmail} className="svg" alt="Developer" />
                  </a>
                </div>
              </li>
              <li>
								<div class="logo">
									<a href="https://github.com/Hardly-Human" target="_blank">
                  <img src={github} className="svg" alt="Developer" />
                  </a>
                </div>
              </li>
              <li>
								<div class="logo">
									<a href="https://github.com/Hardly-Human" target="_blank">
                  <img src={instagram} className="svg" alt="Developer" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="short_info wow fadeInUp" data-wow-duration="1.5s">
						<ul>
							<li>
								<div class="list_inner">
									<div class="logo">
										<a href="https://www.google.com/maps/place/Hyderabad,+Telangana/" target="_blank">
                    <img src={location} className="svg" alt="Developer" />
										</a>
									</div>
									<div class="info">
										<h3>Location</h3>
										<span>Calgary, Canada</span>
									</div>
								</div>
							</li>
							
							<li>
								<div class="list_inner">
									<div class="logo">
										<a href="mailto:p.jaykumar1911@gmail.com" target="_blank">
                    <img src={email_2} className="svg" alt="Developer" />
										</a>
									</div>
									<div class="info">
										<h3>Mail</h3>
										<span>p.jaykumar1911@gmail.com</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
        

      <div className="content">
        <div className="left">
        <iframe src="https://maps.google.com/maps?q=Calgary,Canada&t=&z=8&ie=UTF8&iwloc=&output=embed"
									frameborder="0" className="map"></iframe>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="email"
              name="email"
              className="form-input"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="form-input"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                Thanks, I will reply ASAP :)
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
