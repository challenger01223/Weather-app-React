import React from "react";
import Header from "./Header";

interface AppLayoutProps {
    chidlren: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ chidlren }) => {
    return (
        <>
            <Header />
            {chidlren}
        </>
    )
};

export default AppLayout;