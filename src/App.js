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
    Projects,
    NotFound,
    About,
    Detail,
} from "./pages/index";
import Root from "./layouts/Root";
import { ROUTES } from "./routes/routes";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<NotFound />}>
            <Route path={ROUTES.home.path} element={<Home />} />
            <Route path={ROUTES.about.path} element={<About />} />
            <Route path={ROUTES.project.path} element={<Projects />} />
            <Route path={ROUTES.detail.path} element={<Detail />} />

        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
