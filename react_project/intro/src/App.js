import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";






function App() {
  let productInfo = {title: "ProductList",someThingElse:"something"};
  let categoryInfo = {title: "CategoryList"};
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col cs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
