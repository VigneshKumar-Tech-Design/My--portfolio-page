import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! 🚀");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="form-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Blackhole Animation */}
        <div className="blackhole-container">
          <div className="blackhole">
            <div className="event-horizon"></div>
            <div className="accretion-disk"></div>
            <div className="logo-contact">VK</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
