import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaSprayCan,
  FaSnowflake,
  FaFaucet,
  FaBoxes,
  FaTools,
  FaUtensils,
  FaDoorOpen,
  FaCouch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const services = [
    { icon: FaSprayCan, name: "Cleaning", color: "#3b82f6" },
    { icon: FaSnowflake, name: "AC Repair", color: "#06b6d4" },
    { icon: FaFaucet, name: "Plumbing", color: "#0ea5e9" },
    { icon: FaBoxes, name: "Shifting", color: "#8b5cf6" },
  ];

  const allServices = [
    { icon: FaSprayCan, name: "Cleaning" },
    { icon: FaSnowflake, name: "AC Repair" },
    { icon: FaFaucet, name: "Plumbing" },
    { icon: FaTools, name: "Fan/TV Fix" },
    { icon: FaUtensils, name: "Cooking Help" },
    { icon: FaDoorOpen, name: "Door Repair" },
    { icon: FaCouch, name: "Sofa Repair" },
    { icon: FaDoorOpen, name: "Door" },
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
    <div className="home">
      <Helmet>
        <title>
          CityFixer - Premium Home Services | Cleaning, AC Repair, Plumbing
        </title>
        <meta
          name="description"
          content="Professional home services at your doorstep. Expert cleaning, AC repair, plumbing, and scrap pickup services. Fast, reliable, and guaranteed satisfaction."
        />
        <meta
          name="keywords"
          content="home services, cleaning services, AC repair, plumbing services, scrap pickup, professional cleaning, HVAC repair, home maintenance"
        />
        <link rel="canonical" href="https://cityfixer.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="CityFixer - Premium Home Services | Cleaning, AC Repair, Plumbing"
        />
        <meta
          property="og:description"
          content="Professional home services at your doorstep. Expert cleaning, AC repair, plumbing, and scrap pickup services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cityfixer.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CityFixer - Premium Home Services"
        />
        <meta
          name="twitter:description"
          content="Professional home services at your doorstep. Expert cleaning, AC repair, plumbing, and scrap pickup services."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Fast, Reliable Home Services at Your Doorstep!
              </h1>
              <p className="hero-subtitle">
                Professional cleaning, AC repair, plumbing, and more. We bring
                quality service right to your home with experienced technicians
                and guaranteed satisfaction.
              </p>
              <Link to="/contact" className="btn btn-secondary">
                Get Help Now
              </Link>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="service-images-container">
                <div className="service-image-card service-image-1">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Professional cleaning service"
                    className="service-image"
                  />
                  <div className="image-overlay">
                    <span className="service-label">Cleaning</span>
                  </div>
                </div>

                <div className="service-image-card service-image-2">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="AC repair service"
                    className="service-image"
                  />
                  <div className="image-overlay">
                    <span className="service-label">AC Repair</span>
                  </div>
                </div>

                <div className="service-image-card service-image-3">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Plumbing service"
                    className="service-image"
                  />
                  <div className="image-overlay">
                    <span className="service-label">Plumbing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive home services to keep your space clean, functional,
              and comfortable
            </p>
          </motion.div>

          <motion.div
            className="grid grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="service-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="service-icon"
                  style={{ background: service.color }}
                >
                  <service.icon />
                </div>
                <h3 className="service-name">{service.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Complete Service Portfolio</h2>
            <p className="section-subtitle">
              From basic maintenance to complex repairs, we've got you covered
            </p>
          </motion.div>

          <motion.div
            className="grid grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="service-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-name">{service.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Contact us today for a free consultation and quote
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
