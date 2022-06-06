import Following from './pages/Following';
import Home from './pages/Home';
import { publicRoutes } from './routes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>DucAnh</h1>
                <Link to="/home">Home</Link>
                <br />
                <Link to="/following">Following</Link>
            </header>
            <Routes>
                {publicRoutes.map((route) => (
                    <Route path={route.path} element={<route.element />}></Route>
                ))}
            </Routes>
        </div>
    );
}

export default App;
