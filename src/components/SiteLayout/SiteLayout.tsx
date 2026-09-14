import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import { Outlet } from "react-router";
import styles from "./SiteLayout.module.css"

function SiteLayout() {
    return (
        <>
            <Header />
            <main className={styles.content}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default SiteLayout;