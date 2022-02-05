import { Route,Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
export default function Router()
{
    return (
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    )
}