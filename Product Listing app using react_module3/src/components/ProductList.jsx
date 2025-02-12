import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "./ProductCard";

function ProductList(productsData) {

  const products = productsData["productsList"];

  return (
    <Container>
      <Row>
        {
          products.map((product, index) => {
            return (
              <Col xs={12} sm={12} md={4} lg={4} xl={3} xxl={3} key={index} className="pt-5 pb-2 px-4">
                <ProductCard product={product} />
              </Col>
            )
          })
        }
      </Row>
    </Container >
  )
}

export default ProductList