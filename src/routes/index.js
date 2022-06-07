import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
//Layouts
import HeaderOnly from '../components/Layout/HeaderOnly';

export const publicRoutes = [
    { path: '/home', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile, layout: null },
    { path: '/upload', element: Upload, layout: HeaderOnly },
];
export const privateRoutes = [];
