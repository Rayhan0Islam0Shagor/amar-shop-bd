import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../../components/Products/Products";
import Loading from "../../components/Loading/Loading";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className={styles.home}>
      <Container>
        <Row>
          {loading && <Loading />}
          {products &&
            products.map((product) => {
              return (
                <Col
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  className="p-2"
                  key={product.id}
                >
                  <Products product={product} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
