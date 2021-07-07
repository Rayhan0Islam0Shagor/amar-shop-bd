import styles from "./Products.module.scss";

const Products = ({ product }) => {
  const { title, price, category, description, image } = product;

  return (
    <div className={styles.products}>
      <div>
        <div className={`${styles.imageBox} p-2`}>
          {image && <img loading="lazy" src={image} width="100%" alt={title} />}
        </div>
        <div className={styles.content}>
          {title && <p>{title.substring(0, 20) + "..."}</p>}
          <div className={styles.pricing}>
            {price && <p className={styles.price}>BDT1200</p>}
            <p className={styles.discount}>15%</p>
          </div>
        </div>
      </div>

      <div className={styles.addToCart}>
        <button className="btn btn-primary">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Products;
