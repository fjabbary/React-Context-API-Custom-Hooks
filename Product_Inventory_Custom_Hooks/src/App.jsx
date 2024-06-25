import "./App.css";
import ProductList from "./components/ProductList";
import { productsData } from "./productsData";
import Container from "react-bootstrap/Container";

function App() {
  console.log(productsData);
  return (
    <Container className="mt-5">
      <ProductList />
    </Container>
  );
}

export default App;
