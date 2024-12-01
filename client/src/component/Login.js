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
import img from "../component/Photos/image 1.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا إضافة منطق التحقق من الحساب
    console.log(formData);
  };

  return (
    <Container className="login-container">
      <Row>
        <Col md={6} className="login-form">
          <div className="register-r">
            <img src={logo} className="logo_register"></img>
          </div>
          <h2 className="display-6 logtitle">Login</h2>
          <p className="login-description">
            Welcome Back! Please enter your credentials to access your account.
          </p>

          <Form onSubmit={handleSubmit}>
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
            <Button type="submit" color="dark" className="login-btn">
              Login Now
            </Button>
          </Form>
          <p className="forgot-password">
            <a href="/forgot-password">Forgot your password?</a>
          </p>
          <p className="create-account">
            New user? <a href="/register">Create account</a>
          </p>
        </Col>

        <Col md={6} className="login-image">
          <img
            src={img} // استبدل هذه الصورة بالصورة الفعلية الخاصة بك
            alt="Lipstick Product"
            className="login-image__content"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
