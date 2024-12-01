import {
  Form,
  Input,
  FormGroup,
  Label,
  Container,
  Button,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve the current state from the store
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      alert("Login failed. Please check your credentials."); // Provide user feedback
    }
    if (isSuccess) {
      navigate("/"); // Navigate to the home page on successful login
    }
  }, [isError, isSuccess, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow border-0">
              <CardBody>
                <CardTitle className="text-center mb-4">
                  <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid mb-3"
                    style={{ width: "100px" }}
                  />
                  <h4>Welcome Back</h4>
                  <p className="text-muted">Log in to your account</p>
                </CardTitle>
                <Form onSubmit={handleLogin}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required // Add basic HTML validation
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required // Add basic HTML validation
                    />
                  </FormGroup>
                  <Button color="warning" block type="submit">
                    Log In
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  <p className="smalltext">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary">
                      Sign up now.
                    </Link>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
