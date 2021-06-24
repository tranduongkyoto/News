import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu/Menu';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
type RouteType = {
    path: string,
    exact: boolean,
    main: (...args: any[]) => any
}

function App() {
    const showContentMenus = (routes: RouteType[]): JSX.Element[] | null => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return result;
    }
    return (
        <Router>
            <div className="App">
                <Menu />
                <Switch>{showContentMenus(routes)}</Switch>
            </div>
        </Router>
    );
}

export default App;
