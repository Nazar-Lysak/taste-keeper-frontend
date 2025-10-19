import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AuthForm.module.scss";
import { useTranslation } from "react-i18next";

type AuthMode = "login" | "register" | "reset";

const AuthForm = () => {
  const { t } = useTranslation("auth");
  const [mode, setMode] = useState<AuthMode>("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const modeConfig = {
    login: {
      title: t("login.title"),
      subtitle: t("login.subtitle"),
      buttonText: t("login.buttonText"),
      color: "#3b82f6",
    },
    register: {
      title: t("register.title"),
      subtitle: t("register.subtitle"),
      buttonText: t("register.buttonText"),
      color: "#10b981",
    },
    reset: {
      title: t("reset.title"),
      subtitle: t("reset.subtitle"),
      buttonText: t("reset.buttonText"),
      color: "#f59e0b",
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${mode} submitted:`, formData);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.03,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.01,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.15 },
    },
    tap: { scale: 0.99 },
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        {/* Header */}
        <motion.div className={styles.header} variants={itemVariants}>
          <motion.h2
            className={styles.title}
            key={`title-${mode}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {modeConfig[mode].title}
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            key={`subtitle-${mode}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {modeConfig[mode].subtitle}
          </motion.p>
        </motion.div>

        {/* Form Container with fixed height */}
        <motion.div
          className={styles.formContainer}
          animate={{
            minHeight:
              mode === "register"
                ? "350px"
                : mode === "reset"
                  ? "200px"
                  : "280px",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.form
              key={mode}
              onSubmit={handleSubmit}
              className={styles.form}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Username Field */}
              {(mode === "login" || mode === "register") && (
                <motion.div
                  className={styles.inputGroup}
                  variants={itemVariants}
                >
                  <motion.input
                    type="text"
                    name="username"
                    placeholder={t("placeholders.username")}
                    value={formData.username}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </motion.div>
              )}

              {/* Email Field */}
              {(mode === "register" || mode === "reset") && (
                <motion.div
                  className={styles.inputGroup}
                  variants={itemVariants}
                >
                  <motion.input
                    type="email"
                    name="email"
                    placeholder={t("placeholders.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </motion.div>
              )}

              {/* Password Field */}
              {(mode === "login" || mode === "register") && (
                <motion.div
                  className={styles.inputGroup}
                  variants={itemVariants}
                >
                  <motion.input
                    type="password"
                    name="password"
                    placeholder={t("placeholders.password")}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </motion.div>
              )}

              {/* Confirm Password Field */}
              {mode === "register" && (
                <motion.div
                  className={styles.inputGroup}
                  variants={itemVariants}
                >
                  <motion.input
                    type="password"
                    name="confirmPassword"
                    placeholder={t("placeholders.confirmPassword")}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className={`${styles.submitButton} ${styles[mode]}`}
                variants={buttonVariants}
                style={{ backgroundColor: modeConfig[mode].color }}
                whileHover="hover"
                whileTap="tap"
              >
                {modeConfig[mode].buttonText}
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </motion.div>

        {/* Mode Switcher */}
        <motion.div className={styles.modeSwitcher} variants={itemVariants}>
          {(["login", "register", "reset"] as AuthMode[]).map(
            (modeOption) =>
              mode !== modeOption && (
                <motion.button
                  key={modeOption}
                  onClick={() => handleModeChange(modeOption)}
                  className={styles.modeButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {modeOption === "login" && t("modeButtons.signIn")}
                  {modeOption === "register" && t("modeButtons.register")}
                  {modeOption === "reset" && t("modeButtons.reset")}
                </motion.button>
              ),
          )}
        </motion.div>

        {/* Security Info */}
        <motion.div
          className={styles.securityInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🔒{t("securityInfo")}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AuthForm;
