import { Home } from './components/Home/Home';
import { Layout } from './components/Layout';
import { Tutorials } from './components/Tutorials/Tutorials';
import './styles/index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
        </Route>
    )
);

export const App = () => {
    return <RouterProvider router={router} />;
};
