import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaUser,
  FaComments,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "123-483-7960",
      link: "tel:123-483-7960",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "info@cityfixer.com",
      link: "mailto:info@cityfixer.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      value: "134 Mart Six Hame, City",
      link: "#",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      value: "Mon-Sat: 8AM-8PM",
      link: "#",
    },
  ];

  const services = [
    "Cleaning",
    "AC Repair",
    "Plumbing",
    "Fan/TV Fix",
    "Cooking Help",
    "Door Repair",
    "Sofa Repair",
    "Scrap Pickup",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Send us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <div className="input-with-icon">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <div className="input-with-icon">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.toLowerCase()}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <div className="input-with-icon">
                    <FaComments className="input-icon" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input form-textarea"
                      placeholder="Tell us about your service needs or any questions you have..."
                      rows="5"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-container"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-subtitle">
                We're here to help with all your home service needs
              </p>

              <motion.div
                className="contact-info-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="contact-info-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="contact-cta">
                <h3>Need Immediate Assistance?</h3>
                <p>
                  Call us directly or reach out on WhatsApp for quick support
                </p>
                <div className="contact-buttons">
                  <a href="tel:123-483-7960" className="btn btn-primary">
                    <FaPhone /> Call Now
                  </a>
                  <a
                    href="https://wa.me/1234837960"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Find Us</h2>
            <p className="section-subtitle">
              Visit our office or let us come to you
            </p>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-icon" />
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">134 Mart Six Hame, City</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
