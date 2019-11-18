import Login from '../view/Login/Login';
import List from '../view/List/List';
import Detail from '../view/Detail/Detail';
import Home from '../view/Home/Home';
import Collect from '../view/Collect/Collect';




const routes = [
    {
        path:"/login",
        component:Login
    },
    {
        path:"/list",
        component:List
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/collect",
        component: Collect
    },
    {
        path:"/",
        redirect:"/home"
    }
];

export default routes;