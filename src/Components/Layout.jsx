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
import { Link } from "react-router-dom";

const navLinks = [
    { icon: <Home />, title: "Dashboard", path: "/" },
    { icon: <NotepadText />, title: "Entries", path: "/Entries" },
    { icon: <BookOpen />, title: "Chart of Accounts", link: "/accounts" },
    { icon: <CreditCard />, title: "Payments", link: "/payments" },
    { icon: <Receipt />, title: "Invoices", path: "/" },
    { icon: <DollarSign />, title: "Billings", path: "/" },
    { icon: <Repeat2 />, title: "Reconciliations", path: "/" },
    { icon: <ChartNetwork />, title: "Reports", path: "/" },
    { icon: <Calculator />, title: "VAT", path: "/" },
    { icon: <Settings />, title: "Settings", path: "/" },
];

export default function Layout({ children }) {
    return (
        <>
            <div className="main-container">
                <div className="sidebar-container">
                    <h1 className="main-heading">Finflow</h1>

                    <nav className="nav-container">
                        {navLinks.map((navItem, index) => (
                            <Link
                                className="nav-links"
                                to={navItem.path}
                                key={index}>
                                {navItem.icon}
                                <h2>{navItem.title}</h2>
                            </Link>
                        ))}
                    </nav>
                    <footer>
                        <span className="footer-content">
                            <User />
                            <p>Jane Doe</p>
                        </span>
                        <p className="email">jane.doe@finflow.com</p>
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
