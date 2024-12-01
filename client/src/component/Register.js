import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import logo from "../component/Photos/logo.png";
import c3 from "../component/Photos/c2.jpg";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // إرسال البيانات أو تنفيذ أي إجراء آخر
    console.log(formData);
  };

  return (
    <Container className="register-container">
      <Row>
        <Col md={6} className="register-form">
          <div className="register-r">
            <img src={logo} className="logo_register"></img>
          </div>
          <h2 className="display-6 logtitle">Register</h2>
          <p className="register-description">
            Join us and enjoy exclusive benefits and features!
          </p>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Enter Your Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Enter Your Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Enter Your Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="birthday">Enter Your Birthday</Label>
              <Input
                type="date"
                name="birthday"
                id="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Enter Your Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Enter Your Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="dark" className="register-btn">
              Create Account
            </Button>
          </Form>
        </Col>

        <Col md={6} className="register-image">
          <img
            src={c3}
            alt="Product Image"
            className="register-image__content"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
