

import React from 'react'
import { Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'

const EmptyCartMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center my-5"
    >
      <Alert
        variant="light"
        className="py-5 px-4 shadow-lg"
        style={{
          background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
          borderRadius: "20px",
          border: "none",
          maxWidth: "600px",
          margin: "auto"
        }}
      >
        <div style={{ fontSize: "60px" }}>🚫</div>
        <h2 className="fw-bold mt-3" style={{ color: "#1e3a8a" }}>
          No Products in Your Cart
        </h2>
        <p className="text-muted fs-5">
          Looks like your cart is empty. Start shopping and find great deals!
        </p>
      </Alert>
    </motion.div>
  )
}

export default EmptyCartMessage
