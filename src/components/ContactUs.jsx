import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <Container className="py-5">
        
        <motion.h2
            className="text-center mb-4 fw-bold"
            animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
            >Contact Us
        </motion.h2>

      <Row className="g-4 align-items-stretch">
        {/* Contact Info */}
        <Col md={5}>
          <Card className="p-4 shadow-sm h-100">
            <h4 className="mb-4">Get in Touch</h4>
            <p><FaEnvelope className="me-2 text-primary" /> Mr.rossy2020@gmail.com</p>
            <p><FaPhoneAlt className="me-2 text-primary" /> +20 1 0 6 4 7 4 4 9 7 3</p>
            <p><FaMapMarkerAlt className="me-2 text-primary" /> Cairo, Egypt</p>
            <hr />
            <p>We'd love to hear from you! Whether you have a question, feedback, or a business inquiry — feel free to reach out.</p>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={7}>
          <Card className="p-4 shadow-sm h-100">
            <h4 className="mb-4">Send a Message</h4>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="What's this about?" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write your message here..." />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
