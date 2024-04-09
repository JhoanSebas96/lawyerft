import React from "react";
import { Header } from "../components/Headers";
import { Outlet, ScrollRestoration } from 'react-router-dom'


export const LayoutPublic = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
        </div>
    )
}
