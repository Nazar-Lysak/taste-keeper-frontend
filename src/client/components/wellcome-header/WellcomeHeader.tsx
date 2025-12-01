import { useState} from "react";
import { motion } from "framer-motion";
import style from "./WellcomeHeader.module.scss";
import { SvgSprite, Icon } from "../../icons/svgSprite.tsx";
import { useTranslation } from "react-i18next";

const WellcomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("wellcome");
  return (
    <>
      <SvgSprite />
      <header className={style.header}>
        <motion.h3
          className={style.title}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {t("sidebar.title")}
        </motion.h3>
        <motion.button
          className={style.button}
          initial={{ x: 50, y: -32 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon id="icon-chat_bubble_outline" size={20} />
        </motion.button>
      </header>
    </>
  );
};

export default WellcomeHeader;
