import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./style.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [mapLoading, setMapLoading] = useState(true);
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const validateForm = () => {
    const newErrors = { name: "", email: "", company: "", message: "" };
    let isValid = true;

    if (!values.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!values.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!values.company) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!values.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setValues({ name: "", email: "", company: "", message: "" });
    setErrors({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      // Simulate sending data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resetForm();
    } catch (error) {
      console.error("Failed to submit the form", error);
    } finally {
      setLoading(false); // Ensure loading is reset
    }
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Contact Me</h2>
      <div className="contact__content">
        <div className="contact__details">
          <address className="contact__item contact__item--address">
            <div className="contact__icon-text">
              <FontAwesomeIcon icon={faLocationDot} className="contact__icon" />
              <h3 className="contact__label">Address</h3>
            </div>
            <p className="contact__text">Ulica, Beograd</p>
          </address>
          <div className="contact__item contact__item--phone">
            <div className="contact__icon-text">
              <FontAwesomeIcon icon={faPhone} className="contact__icon" />
              <h3 className="contact__label">Phone</h3>
            </div>
            <p className="contact__text">+3811152483</p>
          </div>
          <div className="contact__item contact__item--email">
            <div className="contact__icon-text">
              <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
              <h3 className="contact__label">Email</h3>
            </div>
            <p className="contact__text">demo@gmail.com</p>
          </div>
          <div className="contact__map">
            {mapLoading && <div className="map-loading">Loading Map...</div>}
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4115603035143!2d20.414641812586158!3d44.81317957095014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a656205000357%3A0xe8aece40a71689d8!2sDekadas%20d.o.o.!5e0!3m2!1sen!2srs!4v1728569323369!5m2!1sen!2srs"
              width="600px"
              height="450px"
              loading="lazy"
              title="Map of location Belgrade"
              className="contact__map-embed"
              onLoad={() => setMapLoading(false)} // Set map loading to false when the map loads
              onError={() => setMapLoading(false)} // Handle error and stop loading
            ></iframe>
          </div>
        </div>
        <div className="contact__form-wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            <fieldset className="contact__fieldset">
              <legend className="contact__legend">Contact Information</legend>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`contact__input ${
                    errors.name ? "contact__input--error" : ""
                  }`}
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <p className="contact__error-text">{errors.name}</p>
                )}
              </div>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`contact__input ${
                    errors.email ? "contact__input--error" : ""
                  }`}
                  placeholder="Please enter your email"
                />
                {errors.email && (
                  <p className="contact__error-text">{errors.email}</p>
                )}
              </div>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  className={`contact__input ${
                    errors.company ? "contact__input--error" : ""
                  }`}
                  placeholder="Enter your company name"
                />
                {errors.company && (
                  <p className="contact__error-text">{errors.company}</p>
                )}
              </div>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className={`contact__textarea ${
                    errors.message ? "contact__textarea--error" : ""
                  }`}
                  placeholder="Write a message"
                ></textarea>
                {errors.message && (
                  <p className="contact__error-text">{errors.message}</p>
                )}
              </div>
            </fieldset>
            <button
              className={`contact__button ${
                loading ? "contact__button--loading" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
