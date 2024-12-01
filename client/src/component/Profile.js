import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "reactstrap";

const Profile = () => {
  // الحالة لحفظ بيانات المستخدم
  const [user, setUser] = useState(null);

  // الحالة لتحديد إذا كان الطلب قيد التحميل
  const [loading, setLoading] = useState(true);

  // جلب البيانات من الخادم عند تحميل المكون
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.example.com/user"); // رابط API
        const data = await response.json();
        setUser(data); // تحديث حالة المستخدم
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // إنهاء حالة التحميل
      }
    };

    fetchUserData();
  }, []);

  // عرض رسالة تحميل أثناء انتظار البيانات
  if (loading) {
    return (
      <Container className="text-center">
        <Spinner color="primary" />
        <p>Loading profile...</p>
      </Container>
    );
  }

  // عرض رسالة إذا لم يتم العثور على بيانات
  if (!user) {
    return (
      <Container className="text-center">
        <h2>No User Data Available</h2>
        <p>Please ensure the server is running or try again later.</p>
      </Container>
    );
  }

  return (
    <Container className="profile-container">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <img
            src={user.profilePicture || "default-profile.png"}
            alt="Profile"
            className="profile-image"
          />
        </Col>
        <Col md={8}>
          <h2 className="profile-name">{user.name || "Name not available"}</h2>
          <p className="profile-email">
            <strong>Email:</strong> {user.email || "Email not available"}
          </p>
          <p className="profile-phone">
            <strong>Phone Number:</strong> {user.phoneNumber || "Not provided"}
          </p>
          <p className="profile-birthday">
            <strong>Birthday:</strong> {user.birthday || "Not provided"}
          </p>
          <Button color="primary" className="profile-edit-button">
            Edit Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
