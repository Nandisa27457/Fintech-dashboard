import React from "react";
import { Home, Settings, User, BookOpen,NotepadText,CreditCard,Receipt,DollarSign,Repeat2,ChartNetwork,Calculator } from "lucide-react";

export default function Layout({children}) {
    return (
        <>
        <div className="main-container">
            <div className="sidebar-container">
                <h1 className="main-heading">Finflow</h1>

                <nav className="nav-links">
                    <div className="nav-container"> 
                    <Home size={24} />
                    <h2 className ="nav-link-titles">Dashboard</h2>
                    </div>
                    <div className="nav-container">
                    <NotepadText/>
                    <h2 className ="nav-link-titles">Entries</h2>
                    </div>
                    <div className="nav-container">
                    <BookOpen/>
                    <h2 className ="nav-link-titles">Charts of Accounts</h2>
                    </div>
                    <div className="nav-container">
                    <CreditCard/>
                    <h2 className ="nav-link-titles">Payments</h2>
                    </div>
                    <div className="nav-container">
                    <Receipt/>
                    <h2 className ="nav-link-titles">Invoices</h2>
                    </div>
                    <div className="nav-container">
                    <DollarSign/>
                    <h2 className ="nav-link-titles">Billings</h2>
                    </div>
                    <div className="nav-container">
                   <Repeat2/>
                    <h2 className ="nav-link-titles">Reconciliation</h2>
                    </div>
                    <div className="nav-container">
                    <ChartNetwork/>
                    <h2 className ="nav-link-titles">Reports</h2>
                    </div>
                    <div className="nav-container">
                    <Calculator/>
                    <h2 className ="nav-link-titles">VAT</h2>
                    </div>
                    <div className="nav-container">
                    <Settings/>
                    <h2 className ="nav-link-titles">Settings</h2>
                    </div>
                </nav>
                <footer>
                    <span className="footer-content">
                    <User/>
                    <p>Jane Doe</p>
                    </span>
                    <p className="email">jane.doe@finflow.com</p>
                </footer>
            </div>
              {/* Main-Container */}
              <div className="body">
                <h1>DashBoard</h1>
                <p className="sub-heading">Your final overview at a glance</p>
            <div className="dashboard-container" >
                    {children}
                </div>
                </div>
                </div>
        </>
    );
}
