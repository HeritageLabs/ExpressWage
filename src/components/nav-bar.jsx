import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="flex items-center w-full justify-between">
            <img src="/logo.svg" alt="logo" className="w-[180px]" />
            <div className="w-[20%] justify-between flex items-center">
                <button className="hover:text-primary font-light">About us</button>
                <button className="hover:text-primary font-light">How to get started</button>
            </div>
            <Button>Connect wallet</Button>
        </div>
    )
};

export default Navbar;
