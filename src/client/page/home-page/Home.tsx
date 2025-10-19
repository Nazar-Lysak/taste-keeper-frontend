import WellcomeHeader from "../../components/wellcome-header/WellcomeHeader";
import WellcomeIntro from "../../components/wellcome-intro/WellcomeIntro";
import WellcomeSidebar from "../../components/wellcome-sidebar/WellcomeSidebar";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <WellcomeSidebar />
      </div>
      <div className={style.mainContent}>
        <WellcomeHeader />
        <WellcomeIntro />
      </div>
    </div>
  );
};

export default Home;
