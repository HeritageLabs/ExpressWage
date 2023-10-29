import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { DASHBOARD_URL, HOME_URL } from "../config/paths";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center w-full justify-between">
            <a href={HOME_URL}>
                <img src="/logo.svg" alt="logo" className="w-[180px]" />
            </a>
            <div className="w-[20%] justify-between flex items-center">
                <button className="hover:text-secondary font-light">About us</button>
                <button className="hover:text-secondary font-light">How to get started</button>
            </div>
            <Button onClick={() => navigate(DASHBOARD_URL)}>Connect wallet</Button>
        </div>
    )
};

export default Navbar;
