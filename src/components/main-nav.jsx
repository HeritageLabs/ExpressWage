/* eslint-disable react/prop-types */
import { LogOut, Menu } from 'lucide-react';
import { Avatar, AvatarFallback } from "../components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

import { HOME_URL } from '../config/paths';
import { useLocation, useNavigate } from 'react-router-dom';

const MainNav = ({ setShowNav }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

  const renderTitle = () => {
    return pathname.split('/').slice(1)[0].replace('-', ' ');
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate(HOME_URL);
  };

  return (
    <div className="flex justify-between pt-4 lg:pt-8 pb-3 items-center px-6 z-10 cursor-pointer">
      <Menu className="sm:flex md:hidden" onClick={() => setShowNav(true)} />
      <p className="font-medium w-fit capitalize">{renderTitle()}</p>
      <div className="flex items-center">
        {/* <Settings className="mr-2 h-[22px] w-[22px]" /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarFallback className="bg-primary text-white border-none outline-none">
                OM
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MainNav;
