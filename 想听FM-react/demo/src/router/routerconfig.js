import My from '../view/Home/My';
import Hot from '../view/Home/Hot';
import Class from '../view/Home/Class';
import Boutique from '../view/Home/Boutique';
import Home from '../view/Home/Home';



const routes = [
    {
        path:"/home",
        component:Home,
        children:[
            {
                path: "/home/my",
                component: My
            },
            {
                path: "/home/hot",
                component: Hot
            },
            {
                path: "/home/class",
                component: Class
            },
            {
                path: "/home/boutique",
                component: Boutique
            },
            {
                path:"/home",
                redirect:"/home/my"
            }
        ]
    },
    {
        path: "/",
        redirect: "/home"
    }
]

export default routes;