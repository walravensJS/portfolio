import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./reset.css";
import "./App.css";
import {

    Home,

    NotFound,

} from "./pages/index";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<NotFound />}>
            <Route path={ROUTES.home.path} element={<Home />} />

        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
