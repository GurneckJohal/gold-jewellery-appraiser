import { createBrowserRouter } from "react-router";
import SiteLayout from '../components/SiteLayout/SiteLayout';
import MainArticle from "../pages/MainArticle/MainArticle";
import Appraiser from "../pages/Appraiser/Apraiser";
import PriceHistory from "../pages/PriceHistory/PriceHistory";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: SiteLayout,
        children: [
            {index: true, Component: MainArticle},
            {path: '/appraiser', Component: Appraiser},
            {path: '/price-history', Component: PriceHistory}
        ]
    }
]);

