import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row></Row>
        <Row></Row>
      </Container>
      <h3>Hello from react</h3>
      <Navi />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
