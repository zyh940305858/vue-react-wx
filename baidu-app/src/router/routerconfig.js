import Home from '../view/Home/Home';
import Detail from '../view/Detail/Detail';
import Collect from '../view/Collect/Collect';



const routes = [
    {
        path:"/home",
        component:Home
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/collect",
        component: Collect
    },
    {
        path:"/",
        redirect:'/home'
    }
];


export default routes;