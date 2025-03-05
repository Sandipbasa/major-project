import React from 'react';
import { motion } from 'framer-motion';

const SignInPage = () => {
  return (
    <div style={styles.container}>
      {/* Left Section: Welcome Message with Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Initial position (off-screen to the left)
        animate={{ opacity: 1, x: 0 }} // Animate to visible position
        transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth sliding animation
        style={styles.leftSection}
      >
        {/* Background Image with Reduced Opacity */}
        <div style={styles.imageContainer}>
          <img
            src="/loginimg.jpeg" // Image from the public folder
            alt="UrbanRoots"
            style={styles.backgroundImage}
          />
        </div>
        {/* Text Overlay */}
        <div style={styles.textOverlay}>
          <h1 style={styles.welcomeHeading}>Welcome Back to UrbanRoots</h1>
          <p style={styles.welcomeText}>
            Sign in to access your account, save your favorite properties, and get personalized recommendations.
          </p>
        </div>
      </motion.div>

      {/* Right Section: Sign-In Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Initial position (off-screen to the right)
        animate={{ opacity: 1, x: 0 }} // Animate to visible position
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} // Smooth sliding animation with delay
        style={styles.rightSection}
      >
        <div style={styles.formContainer}>
          <h2 style={styles.formHeading}>Sign In</h2>

          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>

          {/* Forgot Password Link */}
          <a href="/forgot-password" style={styles.forgotPassword}>
            Forgot Password?
          </a>

          {/* Sign-In Button */}
          <button style={styles.signInButton}>Sign In</button>

          {/* Divider */}
          <div style={styles.divider}>
            <span style={styles.dividerText}>OR</span>
          </div>

          {/* Social Login Buttons */}
          <button style={styles.socialButton}>
            <img
              src="/googleicon.png" // Google icon from public folder
              alt="Google"
              style={styles.socialIcon}
            />
            Sign in with Google
          </button>
          <button style={styles.socialButton}>
            <img
              src="/facebookicon.png" // Facebook icon from public folder
              alt="Facebook"
              style={styles.socialIcon}
            />
            Sign in with Facebook
          </button>

          {/* Sign-Up Link */}
          <p style={styles.signUpText}>
            Don't have an account? <a href="/signup" style={styles.signUpLink}>Sign Up</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  leftSection: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    marginRight: '20px',
    overflow: 'hidden', // Ensure the image doesn't overflow
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1, // Place the image behind the text
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure the image covers the entire section
    opacity: 0.7, // Reduced opacity for the image
  },
  textOverlay: {
    position: 'relative',
    zIndex: 2, // Place the text above the image
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
    padding: '40px',
    borderRadius: '10px',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '600px',
  },
  welcomeHeading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold', // Make the heading bold
  },
  welcomeText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  formHeading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
  },
  forgotPassword: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#007BFF',
    textAlign: 'right',
    marginBottom: '20px',
    textDecoration: 'none',
  },
  signInButton: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  dividerText: {
    flex: 1,
    textAlign: 'center',
    color: '#888',
    fontSize: '0.9rem',
  },
  socialButton: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  socialIcon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  signUpText: {
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default SignInPage;