import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import deep from "../component/Photos/Deep.jpg";
import strike from "../component/Photos/strike.jpg";
import nova from "../component/Photos/nova.jpg";
import warm from "../component/Photos/warm.jpg";
import guidence from "../component/Photos/nova.jpg";
import kiya from "../component/Photos/kiya.jpg";
import cruch from "../component/Photos/crush.jpg";
import cinnom from "../component/Photos/cinnamon.jpg";
import red from "../component/Photos/luiscous_red.jpg";
import sleep from "../component/Photos/Sleeply_eyes.jpg";
import summer from "../component/Photos/summer_scent.jpg";
import redbrown from "../component/Photos/Rude_Brown.jpg";
import imgp from "../component/Photos/IMG_8626.jpg";
import b1 from "../component/Photos/b1.jpg";
// Sample data for products (could be dynamic data from an API)
const productData = [
  {
    imgSrc: deep,
    title: "Deep",
    subtitle: "4 OMR",
    description: "Deep: Bold color for a captivating look",
    bestSeller: true, // Flag to mark it as the best seller
  },
  {
    imgSrc: strike,
    title: "Strike",
    subtitle: "4 OMR",
    description: "Make a bold impact with every swipe",
  },
  {
    imgSrc: guidence,
    title: "No Guidance",
    subtitle: "5 OMR",
    description: "Bold and beautiful lips with No Guidance.",
  },
  {
    imgSrc: cinnom,
    title: "CINNAMON",
    subtitle: "4 OMR",
    description: "Cinnamon: Warm, rich, and effortlessly chic lips.",
  },
  {
    imgSrc: nova,
    title: "Nova",
    subtitle: "4 OMR",
    description: "Nova: Shine bright with a touch of elegance.",
  },
  {
    imgSrc: kiya,
    title: "Kiya",
    subtitle: "4 OMR",
    description: "Soft, subtle, and naturally beautiful lips.",
  },
  {
    imgSrc: sleep,
    title: "Sleeply Eyes",
    subtitle: "4 OMR ",
    description: "Dreamy color for a relaxed, chic look",
  },
  {
    imgSrc: redbrown,
    title: "Red Brown",
    subtitle: "4 OMR",
    description: "A timeless blend of warmth and elegance",
  },
  {
    imgSrc: summer,
    title: "Summer Scent",
    subtitle: "4 OMR",
    description: " A fresh burst of color for sunny days.",
  },
  {
    imgSrc: warm,
    title: "Warm ",
    subtitle: "4 OMR",
    description:
      "Get bold, vibrant warmth and a glossy finish with our Warm Lip Gloss for a stunning pout.",
  },
  {
    imgSrc: cruch,
    title: "Cruch",
    subtitle: "4 OMR",
    description:
      "Get bold, vibrant warmth and a glossy finish with our Warm Lip Gloss Crush for a stunning pout.",
  },
  {
    imgSrc: red,
    title: "Lucsious Red",
    subtitle: "4 OMR",
    description:
      "Get bold, vibrant warmth and a glossy finish with our Luscious Red Warm Lip Gloss for a stunning pout.",
  },
];

const Products = () => {
  return (
    <div className="back">
      <Row>
        <div className="beauty-collection-section">
          <div className="beauty-collection-image">
            <img src={b1} className="rayacimg" alt="Raya Beauty Collection" />
          </div>
          <br></br>
          <div className="beauty-collection-content">
            <h2 className="collection-title display-6">
              RAYA BEAUTY COLLECTION
            </h2>
            <p className="collection-description">
              Embrace your natural beauty with Raya Beauty!
            </p>
            <Button color="dark" outline>
              BUY NOW
            </Button>
          </div>
          <br></br>
          <br></br>
        </div>
      </Row>
      <Row>
        {productData.slice(0, 3).map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              {product.bestSeller && (
                <div className="best-seller-badge">Best Seller</div> // Badge for best seller
              )}
              <CardImg
                alt="Card image cap"
                src={product.imgSrc}
                top
                width="100%"
              />
              <CardBody className="text-center d-flex flex-column justify-content-between">
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <span className="price">{product.subtitle}</span>
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button color="dark" className="mx-auto">
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {productData.slice(3).map((product, index) => (
          <Col key={index + 3} md={4} className="mb-4">
            <Card>
              {product.bestSeller && (
                <div className="best-seller-badge">Best Seller</div> // Badge for best seller
              )}
              <CardImg
                alt="Card image cap"
                src={product.imgSrc}
                top
                width="100%"
              />
              <CardBody className="text-center d-flex flex-column justify-content-between">
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <span className="price">{product.subtitle}</span>
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button color="dark" className="mx-auto">
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
