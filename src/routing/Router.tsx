import { Route,Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Complaint from "../components/Complaint";
export default function Router()
{
    return (
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Complaint-form" element={<Complaint />} />
        </Routes>
    )
}