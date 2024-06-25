import Form from "react-bootstrap/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const NewProductForm = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value, id: uuidv4() });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleAdd}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" name="imageUrl" onChange={handleChange} />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

NewProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired, // Marking the function prop as required
};

export default NewProductForm;
