import { HOME_URL } from "../config/paths";
import { CustomButton } from "./ui/custom-button";
import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'


const Navbar = () => {
  const { connect } = useConnect({
      connector: new InjectedConnector(),
  });
  
  useEffect(() => {
      connect();
  }, []);

  return (
    <div className="flex items-center w-full justify-between">
      <a href={HOME_URL}>
        <img src="/logo.svg" alt="logo" className="w-[180px]" />
      </a>
      <div className="w-[20%] justify-between flex items-center">
        <button className="hover:text-secondary font-light">About us</button>
        <button className="hover:text-secondary font-light">
          How to get started
        </button>
      </div>
      {!(window.ethereum && window.ethereumisMiniPay) && <CustomButton
        accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        chainStatus="none"
      />}
    </div>
  );
};

export default Navbar;
