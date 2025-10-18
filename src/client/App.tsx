import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"
import Home from "./page/home-page/Home";


function App() {

  const { t } = useTranslation("common")
  
  return (
    <div style={{overflow: "hidden"}}>
      {/* <h1>{t("home")}</h1> */}
      <Home />

    </div>
  )
}

export default App
