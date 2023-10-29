import { useNavigate } from "react-router-dom";
import HomeLayout from "../../components/layouts/home-layout";
import { Button } from "../../components/ui/button";
import { DASHBOARD_URL } from "../../config/paths";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <div className="grid grid-cols-2 gap-16 mt-8 items-center px-12 py-4">
        <div className="w-[80%]">
          <h1 className="leading-[80px] text-[70px] font-medium">
            Help simplify your payroll process
          </h1>
          <p className="mt-3 text-primary text-sm font-extralight">
            We make it easy for you to handle all of your payroll needs, from
            hiring employees to paying them and everything in between. Paying
            your family and friends.
          </p>

          <div className="flex mt-5">
            <Button className="h-[45px] px-8 bg-secondary text-white hover:bg-secondary">
              Get started
            </Button>
            <Button
              className="h-[45px] px-8 ml-8"
              onClick={() => navigate(DASHBOARD_URL)}
            >
              Continue
            </Button>
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
