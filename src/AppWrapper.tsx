import App from './App.tsx'
import useAppInitializer from './hooks/useAppInitializer.ts'
import { motion } from "framer-motion";
import MainLayout from './Layouts/MainLayout.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from './pages/SignUpPage.tsx';
import SignInPage from './pages/SignInPage.tsx';


// Define the route configurations
const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <App /> },
        ]
    },
    {
        path: "/signin",
        element: <SignInPage />
    },
    {
        path:"/signup",
        element: <SignUpPage/>
    }
]);

const AppWrapper = () => {
    useAppInitializer();
    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <RouterProvider router={route} />
        </motion.div>
    );
};

export default AppWrapper;