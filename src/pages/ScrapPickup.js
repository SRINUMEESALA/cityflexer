import React, { useState } from "react";
import {
  FaRecycle,
  FaBook,
  FaWineBottle,
  FaBox,
  FaTruck,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./ScrapPickup.css";

const ScrapPickup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    scrapType: "",
    quantity: "",
    preferredDate: "",
    message: "",
  });

  const scrapCategories = [
    {
      icon: FaRecycle,
      name: "Metal",
      description: "Aluminum, steel, copper, brass, and other metal scraps",
      color: "#3b82f6",
    },
    {
      icon: FaBook,
      name: "Books",
      description: "Old books, magazines, newspapers, and paper materials",
      color: "#8b5cf6",
    },
    {
      icon: FaWineBottle,
      name: "Plastic",
      description: "Plastic bottles, containers, and other plastic materials",
      color: "#06b6d4",
    },
    {
      icon: FaBox,
      name: "Cardboard",
      description: "Cardboard boxes, packaging materials, and paperboard",
      color: "#f59e0b",
    },
  ];

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
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon to schedule your pickup.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      scrapType: "",
      quantity: "",
      preferredDate: "",
      message: "",
    });
  };

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
    <div className="scrap-pickup-page">
      {/* Hero Section */}

      {/* Scrap Categories */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">We Accept</h2>
            <p className="section-subtitle">
              Various types of scrap materials for recycling and proper disposal
            </p>
          </motion.div>

          <motion.div
            className="grid grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {scrapCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="scrap-category-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="category-icon"
                  style={{ background: category.color }}
                >
                  <category.icon />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Request Pickup Form */}
      <section className="section bg-light">
        <div className="container">
          <div className="pickup-content">
            <motion.div
              className="pickup-info"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Request Pickup</h2>
              <p className="section-subtitle">
                Schedule a convenient pickup time and we'll collect your scrap
                materials
              </p>

              <div className="pickup-features">
                <div className="feature-item">
                  <FaTruck className="feature-icon" />
                  <div>
                    <h4>Free Pickup</h4>
                    <p>
                      We provide free pickup service for qualifying quantities
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <FaCalendarAlt className="feature-icon" />
                  <div>
                    <h4>Flexible Scheduling</h4>
                    <p>Choose a time that works best for your schedule</p>
                  </div>
                </div>

                <div className="feature-item">
                  <FaMapMarkerAlt className="feature-icon" />
                  <div>
                    <h4>Wide Coverage</h4>
                    <p>We serve the entire city and surrounding areas</p>
                  </div>
                </div>

                <div className="feature-item">
                  <FaPhone className="feature-icon" />
                  <div>
                    <h4>Quick Response</h4>
                    <p>We'll contact you within 24 hours to confirm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pickup-form-container"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="pickup-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Full address for pickup"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Scrap Type *</label>
                    <select
                      name="scrapType"
                      value={formData.scrapType}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select scrap type</option>
                      <option value="metal">Metal</option>
                      <option value="books">Books</option>
                      <option value="plastic">Plastic</option>
                      <option value="cardboard">Cardboard</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., 2 bags, 1 box"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Any special instructions or details about your scrap materials..."
                    rows="4"
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Request Pickup
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple steps to turn your scrap into cash
            </p>
          </motion.div>

          <motion.div
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="step-card" variants={itemVariants}>
              <div className="step-number">1</div>
              <h3>Submit Request</h3>
              <p>
                Fill out our pickup request form with your details and scrap
                information.
              </p>
            </motion.div>

            <motion.div className="step-card" variants={itemVariants}>
              <div className="step-number">2</div>
              <h3>Get Quote</h3>
              <p>
                We'll contact you with a quote based on the type and quantity of
                your scrap.
              </p>
            </motion.div>

            <motion.div className="step-card" variants={itemVariants}>
              <div className="step-number">3</div>
              <h3>Schedule Pickup</h3>
              <p>
                Choose a convenient time and we'll collect your materials from
                your doorstep.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ScrapPickup;
