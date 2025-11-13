import React from "react";
import FinflowCard from "../Components/FinFlowCard";
import Layout from "../Components/Layout";
import { Calculator, DollarSign, Receipt,ChartNetwork } from "lucide-react";
import LineChart from "../Components/LineChart";
import { Line } from "react-chartjs-2";


export default function Dashboard() {
    return (
        <>
            <Layout>
                <div className="card-container">
                <div className="Revenue">
                    <FinflowCard title="Total Revenue">
                        <DollarSign />
                        <p className="amount ">R1 124,580.00</p>
                        <p style={{ color: "#16a34a", marginTop: "0.25rem" }}>
                            +12.4% this month
                        </p>
                    </FinflowCard>
                </div>
                <div className="Expenses">
                    <FinflowCard title="Total expenses ">
                        <Receipt />
                        <p className="amount">R525 0000</p>
                        <p style={{ color: "red", marginTop: "0.25rem" }}>
                            -5.2% this month
                        </p>
                    </FinflowCard>
                </div>
                <div className="VAT">
                    <FinflowCard title="VAT Payable ">
                        <Calculator />
                        <p className="amount">R25 0000</p>
                        <p className="due-date"style={{ color: "grey", marginTop: "0.25rem" }}>
                            due in 20 days
                        </p>
                    </FinflowCard>
                </div>
                <div className="Profit">
                    <FinflowCard title="Net Profit">
                        <ChartNetwork />
                        <p className="amount">R574 580</p>
                        <p className="due-date"style={{ color: "green", marginTop: "0.25rem" }}>
                            18.2% profit margin
                        </p>
                    </FinflowCard>
                </div>
                </div>
                <LineChart/>
            </Layout>
        </>
    );
}
