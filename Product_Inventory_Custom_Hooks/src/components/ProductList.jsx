import { useInventory } from "../hooks/useInventory";
import { productsData } from "../productsData";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewProductForm from "./NewProductForm";

const ProductList = () => {
  const { inventory, removeProduct, addProduct } = useInventory(productsData);

  return (
    <Container>
      <Row>
        <Col className="border p-3 flex-0 align-self-center bg-light">
          <NewProductForm addProduct={addProduct} />
        </Col>
        <Col>
          {" "}
          <h1>Inventory</h1>
          <ListGroup className="bg-light p-5">
            {inventory.map((item) => (
              <ListGroup.Item
                className="d-flex justify-content-between align-items-center"
                key={item.id}
              >
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    width="100px"
                    height="auto"
                    className="me-3"
                  />
                </div>
                <div>{item.name}</div>
                <div>
                  {" "}
                  <Button
                    size="sm"
                    variant="danger"
                    className="ms-5"
                    onClick={() => removeProduct(item.id)}
                  >
                    X
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
