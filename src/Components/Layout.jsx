import React from "react";
import {
    Home,
    Settings,
    User,
    BookOpen,
    NotepadText,
    CreditCard,
    Receipt,
    DollarSign,
    Repeat2,
    ChartNetwork,
    Calculator,
} from "lucide-react";
import NavItem from "./NavItem";
import UserCard from "./UserCard";

const navLinks = [
    { icon: <Home />, title: "Dashboard", path: "/" },
    { icon: <NotepadText />, title: "Entries", path: "/Entries" },
    { icon: <BookOpen />, title: "Chart of Accounts", path: "/accounts" },
    { icon: <CreditCard />, title: "Payments", path: "/payments" },
    { icon: <Receipt />, title: "Invoices", path: "/invoices" },
    { icon: <DollarSign />, title: "Billings", path: "/billings" },
    { icon: <Repeat2 />, title: "Reconciliations", path: "/recon" },
    { icon: <ChartNetwork />, title: "Reports", path: "/reports" },
    { icon: <Calculator />, title: "VAT", path: "/VAT" },
    { icon: <Settings />, title: "Settings", path: "/settings" },
];

export default function Layout({ children }) {
    return (
        <>
            <div className="main-container">
                <div className="sidebar-container">
                    <h1 className="main-heading">Finflow</h1>

                    <nav className="nav-container">
                        {navLinks.map((navItem, index) => (
                            <NavItem
                                key={index}
                                icon={NavItem.icon}
                                title={navItem.title}
                                path={navItem.path}
                            />
                        ))}
                    </nav>
                    <footer>
                        <UserCard/>
                    </footer>
                </div>
                {/* Main-Container */}
                <div className="body">
                    <h1>DashBoard</h1>
                    <p className="sub-heading">
                        Your final overview at a glance
                    </p>
                    <div className="dashboard-container">{children}</div>
                </div>
            </div>
        </>
    );
}
