import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView1) controls1.start({ opacity: 1, y: 0 });
    if (inView2) controls2.start({ opacity: 1, y: 0 });
    if (inView3) controls3.start({ opacity: 1, y: 0 });
    if (inView4) controls4.start({ opacity: 1, y: 0 });
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    inView1,
    inView2,
    inView3,
    inView4,
  ]);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        transition={{ duration: 0.8 }}
        style={styles.heroSection}
      >
        <img
          src="/heroimg.jpg"
          alt="UrbanRoots Hero"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroHeading}>About UrbanRoots</h1>
          <p style={styles.heroText}>
            At UrbanRoots, we are dedicated to helping you find the perfect
            place to call home. With a passion for real estate and a commitment
            to excellence, we make your property dreams a reality.
          </p>
        </div>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={styles.section}
      >
        <div style={styles.textContent}>
          <h2 style={styles.subHeading}>Our Mission</h2>
          <p style={styles.text}>
            Our mission is to provide exceptional real estate services tailored
            to your unique needs. Whether you're buying, selling, or renting, we
            are committed to delivering personalized solutions, transparency,
            and unmatched expertise. We strive to make every step of your real
            estate journey seamless and enjoyable.
          </p>
        </div>
        <img
          src="/missionimg1.avif"
          alt="Our Mission"
          style={styles.sectionImage}
        />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={controls3}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={styles.section}
      >
        <img
          src="/whychooseus.jpeg"
          alt="Why Choose Us"
          style={styles.sectionImage}
        />
        <div style={styles.textContent}>
          <h2 style={styles.subHeading}>Why Choose UrbanRoots?</h2>
          <p style={styles.text}>
            <strong>Local Expertise:</strong> We have an in-depth understanding
            of the local market, ensuring you get the best deals and insights.
            <br />
            <strong>Cutting-Edge Technology:</strong> Our advanced tools and
            platforms make property searches and transactions faster and easier.
            <br />
            <strong>Client-First Approach:</strong> Your satisfaction is our top
            priority. We listen, understand, and deliver results that exceed
            your expectations.
            <br />
            <strong>Trusted Professionals:</strong> Our team of licensed agents
            is dedicated to providing honest, reliable, and professional
            service.
          </p>
        </div>
      </motion.div>

      {/* Our Team Section */}
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={controls4}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={styles.section}
      >
        <div style={styles.textContent}>
          <h2 style={styles.subHeading}>Our Team</h2>
          <p style={styles.text}>
            At UrbanRoots, our team is our greatest asset. We are a group of
            passionate, experienced, and dedicated professionals who are here to
            guide you through every step of your real estate journey. Meet the
            people who make it all possible.
          </p>
        </div>
        <img src="/teamimg1.jpg" alt="Our Team" style={styles.sectionImage} />
      </motion.div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  heroSection: {
    position: "relative",
    marginBottom: "80px",
  },
  heroImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  heroOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
  heroHeading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  heroText: {
    fontSize: "1.2rem",
    textAlign: "center",
    maxWidth: "800px",
  },
  section: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    marginBottom: "80px",
  },
  textContent: {
    flex: 1,
  },
  subHeading: {
    fontSize: "2rem",
    color: "#007BFF",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#555",
  },
  sectionImage: {
    flex: 1,
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default AboutPage;
