import { useSelector } from "react-redux";
import WellcomeHeader from "../../components/wellcome-header/WellcomeHeader";
import WellcomeIntro from "../../components/wellcome-intro/WellcomeIntro";
import WellcomeSidebar from "../../components/wellcome-sidebar/WellcomeSidebar";
import style from "./Home.module.scss";

const Home = () => {
  const isUserLoggedIn = useSelector((state: any) => state.userAuth.isLoggedIn);
  
  return (
    <div style={{ display: "flex" }}>
      <div>
        <WellcomeSidebar />
      </div>
      <div className={style.mainContent}>
        <WellcomeHeader />
        {!isUserLoggedIn && (<WellcomeIntro />)}
      </div>
    </div>
  );
};

export default Home;
