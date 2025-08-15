import React from "react";
import { Link } from "react-router-dom";
import {
  FaSprayCan,
  FaSnowflake,
  FaFaucet,
  FaTools,
  FaUtensils,
  FaDoorOpen,
  FaCouch,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: FaSprayCan,
      name: "Cleaning",
      description:
        "Professional home cleaning services including deep cleaning, regular maintenance, and specialized cleaning for all areas of your home.",
      features: [
        "Deep Cleaning",
        "Regular Maintenance",
        "Kitchen & Bathroom",
        "Window Cleaning",
        "Carpet Cleaning",
      ],
      price: "From ₹3,500",
    },
    {
      icon: FaSnowflake,
      name: "AC Repair",
      description:
        "Expert AC repair and maintenance services to keep your home cool and comfortable throughout the year.",
      features: [
        "AC Installation",
        "Repair & Maintenance",
        "Filter Replacement",
        "Performance Check",
        "Emergency Service",
      ],
      price: "From ₹5,600",
    },
    {
      icon: FaFaucet,
      name: "Plumbing",
      description:
        "Reliable plumbing services for all your home plumbing needs, from minor repairs to major installations.",
      features: [
        "Pipe Repair",
        "Fixture Installation",
        "Drain Cleaning",
        "Water Heater Service",
        "Emergency Repairs",
      ],
      price: "From ₹4,200",
    },
    {
      icon: FaTools,
      name: "Fan/TV Fix",
      description:
        "Professional repair services for fans, TVs, and other electronic appliances in your home.",
      features: [
        "TV Repair",
        "Fan Installation",
        "Remote Programming",
        "Wiring Issues",
        "Parts Replacement",
      ],
      price: "From ₹2,800",
    },
    {
      icon: FaUtensils,
      name: "Cooking Help",
      description:
        "Assistance with cooking and kitchen-related tasks for special occasions or daily meal preparation.",
      features: [
        "Meal Preparation",
        "Kitchen Organization",
        "Recipe Assistance",
        "Cooking Classes",
        "Party Catering",
      ],
      price: "From ₹2,100",
    },
    {
      icon: FaDoorOpen,
      name: "Door Repair",
      description:
        "Complete door repair and installation services for interior and exterior doors.",
      features: [
        "Door Installation",
        "Lock Repair",
        "Hinge Replacement",
        "Weather Stripping",
        "Security Upgrades",
      ],
      price: "From ₹4,900",
    },
    {
      icon: FaCouch,
      name: "Sofa Repair",
      description:
        "Professional furniture repair and restoration services to extend the life of your beloved furniture.",
      features: [
        "Fabric Repair",
        "Frame Fixing",
        "Cushion Replacement",
        "Reupholstering",
        "Cleaning",
      ],
      price: "From ₹6,300",
    },
    {
      icon: FaDoorOpen,
      name: "General Repairs",
      description:
        "Comprehensive repair services for various household items and maintenance needs.",
      features: [
        "Furniture Assembly",
        "Minor Repairs",
        "Installation Services",
        "Maintenance",
        "Custom Solutions",
      ],
      price: "From ₹3,150",
    },
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
    <div className="services-page">
      {/* Hero Section */}

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="service-detail-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  <div className="service-info">
                    <h3 className="service-name">{service.name}</h3>
                    <p className="service-price">{service.price}</p>
                  </div>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <FaCheck className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-primary service-btn">
                  Book Now
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Why Choose CityFixer?</h2>
            <p className="section-subtitle">
              We're committed to providing the best service experience
            </p>
          </motion.div>

          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Experienced Professionals</h3>
              <p>
                Our team consists of skilled and certified professionals with
                years of experience in their respective fields.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaCheck />
              </div>
              <h3>Quality Guarantee</h3>
              <p>
                We stand behind our work with a satisfaction guarantee. If
                you're not happy, we'll make it right.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaTools />
              </div>
              <h3>Fast & Reliable</h3>
              <p>
                Quick response times and reliable service delivery. We value
                your time and convenience.
              </p>
            </motion.div>
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
            <h2 className="cta-title">Need a Custom Service?</h2>
            <p className="cta-subtitle">
              Contact us to discuss your specific requirements and get a
              personalized quote
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
