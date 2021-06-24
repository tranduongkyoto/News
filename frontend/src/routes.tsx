import Giaitri from "./pages/Giaitri";
import HomePage from './pages/HomePage/HomePage';
import Khoahoc from "./pages/Khoahoc";
import Kinhdoanh from "./pages/Kinhdoanh";
import NotFound from './pages/NotFound/NotFound';
import Suckhoe from "./pages/Suckhoe";
import Thethao from "./pages/Thethao";
let routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/thethao',
        exact: false,
        main: () => <Thethao />
    },
    {
        path: '/kinhdoanh',
        exact: false,
        main: () => <Kinhdoanh />
    },
    {
        path: '/suckhoe',
        exact: false,
        main: () => <Suckhoe />
    },
    {
        path: '/giaitri',
        exact: false,
        main: () => <Giaitri />
    },
    {
        path: '/khoahoc',
        exact: false,
        main: () => <Khoahoc />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;