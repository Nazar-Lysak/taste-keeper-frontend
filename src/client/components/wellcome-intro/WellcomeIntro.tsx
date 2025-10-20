import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthForm from "../../forms/auth-form/AuthForm";
import style from "./WellcomeIntro.module.scss";
import { useTranslation } from "react-i18next";

interface PageContentProps {
  title: string;
  description: string;
  path: string;
}

const WellcomeIntro = () => {
  const location = useLocation();
  const { t } = useTranslation("wellcome");

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: 100,
      scale: 0.95,
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const PageContent = ({ title, description, path }: PageContentProps) => (
    <motion.div
      key={path}
      className={style.right}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        damping: 25,
        stiffness: 200,
      }}
    >
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
          delay: 1.2,
          staggerChildren: 0.1,
        }}
        className={style.content}
      >
        <motion.h2 variants={titleVariants} className={style.title}>
          {title}
        </motion.h2>
        <motion.p variants={textVariants} className={style.description}>
          {description}
        </motion.p>

        <motion.div
          className={style.decorativeElements}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={style.dot}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <AuthForm />
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageContent
                title={t("sidebar.home.title")}
                description={t("sidebar.home.description")}
                path="/"
              />
            }
          />
          <Route
            path="/about"
            element={
              <PageContent
                title={t("sidebar.about.title")}
                description={t("sidebar.about.description")}
                path="/about"
              />
            }
          />
          <Route
            path="/help"
            element={
              <PageContent
                title={t("sidebar.help.title")}
                description={t("sidebar.help.description")}
                path="/help"
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <PageContent
                title={t("sidebar.privacy.title")}
                description={t("sidebar.privacy.description")}
                path="/privacy"
              />
            }
          />
          <Route
            path="/feedback"
            element={
              <PageContent
                title={t("sidebar.feedback.title")}
                description={t("sidebar.feedback.description")}
                path="/feedback"
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default WellcomeIntro;
