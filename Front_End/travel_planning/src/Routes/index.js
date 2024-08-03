import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from '../Pages/SignUp.jsx'

export const routes = [
    {
        path: '/',
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
]
export default routes;