import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import style from "./WellcomeSidebar.module.scss";
import { Icon } from "../../icons/svgSprite";

const WelcomeSidebar = () => {
  const location = useLocation();
  const { t } = useTranslation("wellcome");

  const links = [
    { id: 1, to: "/", text: t("sidebar.links.home"), icon: "icon-home" },
    {
      id: 2,
      to: "/help",
      text: t("sidebar.links.help"),
      icon: "icon-wondering",
    },
    {
      id: 3,
      to: "/about",
      text: t("sidebar.links.about"),
      icon: "icon-information",
    },
    {
      id: 4,
      to: "/privacy",
      text: t("sidebar.links.privacy"),
      icon: "icon-privacy_tip",
    },
    {
      id: 5,
      to: "/feedback",
      text: t("sidebar.links.feedback"),
      icon: "icon-bubble",
    },
  ];

  return (
    <motion.div
      className={style.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className={style.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {t("sidebar.title")}
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {links.map((link, index) => {
            const isActive = location.pathname === link.to;

            return (
              <motion.div
                key={`${link.id}-${location.pathname}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  ...(isActive
                    ? {
                        scale: [1, 1.05, 1],
                        x: [0, 3, 0],
                      }
                    : {}),
                }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                tabIndex={-1}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : style.link
                  }
                >
                  <Icon id={link.icon} size={18} /> {link.text}
                </NavLink>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default WelcomeSidebar;
