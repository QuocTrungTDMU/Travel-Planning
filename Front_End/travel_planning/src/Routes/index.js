import HomePage from "../Pages/Client/HomePage.jsx";
import Login from "../Pages/Client/Login.jsx";
import ProductPage from "../Pages/Client/ProductPage/ProductPage.jsx";
import SignUp from '../Pages/Client/SignUp.jsx'

export const routes = [
    {
        path: '/',
        page: HomePage,
       // isShowHeader: true,
    },
    {
        path: '/home',
        page: HomePage,
       // isShowHeader: true,
    },
    {
        path: '/login',
        page: Login,
       // isShowHeader: true,
    },
    {
        path: '/signup',
        page: SignUp,
       // isShowHeader: true,
    },
    {
        path: '/product',
        page: ProductPage,
       // isShowHeader: true,
    },
]
export default routes;