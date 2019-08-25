import React from "react"
import MainSection from "./components/mainSection/MainSection";
import DeveloperImage from "./components/developerImage/Developer";

const HomePage = () => {
  return (
    <>
        <MainSection />
        <DeveloperImage style={{
          width: 300,
          height: 300
        }}/>
    </>
  )
}

export default HomePage
