import HomePage from "../Pages/ClientPage/HomePage/HomePage";
import ServicePage from "../Pages/ClientPage/ServicePage/ServicePage";

const homeRoute = [
    {
        path: '/',
        page: HomePage,
       // isShowHeader: true,
    },
    {
        path: '/service',
        page: ServicePage,
       // isShowHeader: true,
    },
]
export default homeRoute;