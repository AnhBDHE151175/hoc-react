import Following from './pages/Following';
import Home from './pages/Home';
import { publicRoutes } from './routes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import HeaderOnly from './components/Layout/HeaderOnly';
import { Fragment } from 'react';

function App() {
    return (
        <div className="App">
            <DefaultLayout>
                <Home />
            </DefaultLayout>
            {/* <Routes>
                {publicRoutes.map((route) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <route.element />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes> */}
        </div>
    );
}

export default App;
