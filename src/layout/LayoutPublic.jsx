import React from "react";
import { Header } from "../components/Headers";
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from "../components/Footer";


export const LayoutPublic = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </>
    )
}
