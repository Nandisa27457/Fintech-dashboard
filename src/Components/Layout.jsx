import React from "react";

export default function Layout() {
    return (
        <>
            <div className="sidebar-container">
                <h1 className="main-heading">Finflow</h1>
                <nav>
                    <div className="nav-container"> 
                    <img src="public/book.png" width="35px"/>
                    <h2>Dashboard</h2>
                    </div>
                    <div className="nav-container">
                    <img src="public/book.png" width="35px"/>
                    <h2>Entries</h2>
                    </div>
                    <div className="nav-container">
                    <img src="public/book.png" width="35px"/>
                    <h2>Charts of Accounts</h2>
                    </div>
                    <div className="nav-container">
                    <img src="public/book.png" width="35px"/>
                    <h2>Payments</h2>
                    </div>
                    <div className="nav-container">
                    <img src="public/book.png" width="35px"/>
                    <h2>Invoices</h2>
                    </div>
                    <div className="nav-container">
                    <img src="public/book.png" width="35px"/>
                    <h2>Billings</h2>
                    </div>
                    <div className="nav-container">
                    <h2>Reconciliation</h2>
                    </div>
                    <div className="nav-container">
                    <h2>Reports</h2>
                    </div>
                    <div className="nav-container">
                    <h2>VAT</h2>
                    </div>
                    <div className="nav-container">
                    <h2>Settings</h2>
                    </div>
                </nav>
                <footer>
                    <p>Jane Doe</p>
                    <p>jane.doe@finflow.com</p>
                </footer>
            </div>
        </>
    );
}
