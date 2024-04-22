import { createBrowserRouter } from 'react-router-dom';
import { LayoutPublic } from '../layout/LayoutPublic';
import { Suspense, lazy } from 'react';
// import Home from '../pages/Home';

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))


export const router = createBrowserRouter([

    {
        path:"/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={ <div>Loading...</div>} >
                        <Home />
                    </Suspense>
                )
            },
            {
                path: "/nosotros",
                element: (
                    <Suspense fallback={ <div> Loading... </div>} >
                        <About />
                    </Suspense>
                )
            }
        ]
    }
])