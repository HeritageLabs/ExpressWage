import { useNavigate } from 'react-router-dom';
import HomeLayout from '../../components/layouts/home-layout';
import { Button } from '../../components/ui/button';
import { PAYROLL_URL } from '../../config/paths';
import { useAccount } from 'wagmi';
import { CustomButton } from '../../components/ui/custom-button';

const Home = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  return (
    <HomeLayout>
      <div className="grid grid-cols-2 gap-16 mt-8 items-center px-24 py-4">
        <div className="w-full">
          <h1 className="leading-[80px] text-[70px] font-medium">
            Help simplify your payroll process
          </h1>
          <p className="mt-3 text-primary text-sm font-extralight w-[85%]">
            We make it easy for you to handle all of your payroll needs, from
            hiring employees to paying them and everything in between. Paying
            your family and friends.
          </p>

          <div className="flex mt-5">
          {isConnected ? (
              <Button
              className="h-[45px] px-8 bg-secondary text-white hover:bg-secondary"
                onClick={() => navigate(PAYROLL_URL)}
              >
                Go to dashboard
              </Button>
            ) : (
              <CustomButton
                chainStatus="none"
                btnLabel="Get started"
                className="h-[45px] px-8 bg-secondary text-white hover:bg-secondary"
              />
            )}

            {isConnected ? (
              <Button
                className="h-[45px] px-8 ml-8"
                onClick={() => navigate(PAYROLL_URL)}
              >
                Continue
              </Button>
            ) : (
              <CustomButton
                chainStatus="none"
                className="h-[45px] px-8 ml-8"
              />
            )}
          </div>
        </div>
        <img src="/main-image.png" alt="pay roll" />
      </div>
      <img src="/section-two.png" alt="section two" className="" />

      <div className="bg-primary w-full h-[30px]" />
    </HomeLayout>
  );
};

export default Home;
