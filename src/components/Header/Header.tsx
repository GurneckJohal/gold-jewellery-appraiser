import { NavLink } from "react-router";
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1>Gold Jewellery Appraiser</h1>
            <nav>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? `${styles.navLinkActive}` : styles.navLink}>Home</NavLink></li>
                    <li><NavLink to='/appraiser' className={({ isActive }) => isActive ? `${styles.navLinkActive}` : styles.navLink}>Gold Jewellery Appraiser</NavLink></li>
                    <li><NavLink to='/price-history' className={({ isActive }) => isActive ? `${styles.navLinkActive}` : styles.navLink}>Gold Price History</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;