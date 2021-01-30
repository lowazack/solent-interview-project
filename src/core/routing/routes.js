import Home from 'Pages/Homepage';
import Profile from "Pages/Profile";

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/:seed/:userId',
        component: Profile
    },
];