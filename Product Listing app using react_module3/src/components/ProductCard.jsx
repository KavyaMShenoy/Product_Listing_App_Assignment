import Card from 'react-bootstrap/Card';
import "../css/ProductCard.css";

function ProductCard(productDetails) {
    return (
        <Card>
            <Card.Img variant="top" src={productDetails.product.imageURL} alt={productDetails.product.name} />
            <Card.Body style={{ backgroundColor: "lightblue", color: "#AA336A" }}>
                <Card.Title>{productDetails.product.name}</Card.Title>
                <Card.Text>
                    <span className="productPrice">{productDetails.product.price}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard