import React from "react";
import { Home, Settings, User, BookOpen,NotepadText,CreditCard,Receipt,DollarSign,Repeat2,ChartNetwork,Calculator } from "lucide-react";

export default function Layout() {
    return (
        <>
            <div className="sidebar-container">
                <h1 className="main-heading">Finflow</h1>
                
                <nav className="nav-links">
                    <div className="nav-container"> 
                    <Home size={24} />
                    <h2>Dashboard</h2>
                    </div>
                    <div className="nav-container">
                    <NotepadText/>
                    <h2>Entries</h2>
                    </div>
                    <div className="nav-container">
                    <BookOpen/>
                    <h2>Charts of Accounts</h2>
                    </div>
                    <div className="nav-container">
                    <CreditCard/>
                    <h2>Payments</h2>
                    </div>
                    <div className="nav-container">
                    <Receipt/>
                    <h2>Invoices</h2>
                    </div>
                    <div className="nav-container">
                    <DollarSign/>
                    <h2>Billings</h2>
                    </div>
                    <div className="nav-container">
                   <Repeat2/>
                    <h2>Reconciliation</h2>
                    </div>
                    <div className="nav-container">
                    <ChartNetwork/>
                    <h2>Reports</h2>
                    </div>
                    <div className="nav-container">
                    <Calculator/>
                    <h2>VAT</h2>
                    </div>
                    <div className="nav-container">
                    <Settings/>
                    <h2>Settings</h2>
                    </div>
                </nav>
                <footer>
                    <span>
                    <User/>
                    <p>Jane Doe</p>
                    <p>jane.doe@finflow.com</p>
                    </span>
                </footer>
            </div>
        </>
    );
}
