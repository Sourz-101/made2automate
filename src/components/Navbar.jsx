import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <Link to="/" className={styles.addProduct}>
          <img className={styles.img} src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1" />
        </Link>

        <ul className={styles.navItem}>
          <Link to="/" className={styles.addProduct}>
            <li className={styles.navText}>Dashboard</li>
          </Link>

          <Link to="/my-order-page" className={styles.addProduct}>
            <li className={styles.navText}>My Orders</li>
          </Link>
          <Link to="add-product-page" className={styles.addProduct}>
            <li className={styles.navText}>Add Products</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
