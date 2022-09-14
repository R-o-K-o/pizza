import {Routes, Route, Navigate} from "react-router-dom";

import './scss/app.scss';

import {MainLayout} from "./layout";
import {Home, NotFound} from "./pages";

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};
