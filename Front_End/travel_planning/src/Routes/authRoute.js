import Login from "../Pages/ClientPage/AccountPage/Login";
import Signup from "../Pages/ClientPage/AccountPage/SignUp";

const authRoute=[
    {
        path: 'login',
        page: Login,
       // isShowHeader: true,
    },
    {
        path: 'signup',
        page: Signup,
       // isShowHeader: true,
    },
]
export default authRoute;