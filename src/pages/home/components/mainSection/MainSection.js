import React from "react"
import mainSectionStyles from "./mainSection.module.scss"
import { FiLinkedin, FiInstagram, FiSend, FiGithub } from "react-icons/fi"
import { Fade, Flip } from "react-reveal"

const MainSection = () => {
  return (
    <Fade top>
      <main className={mainSectionStyles.home}>
        <h1 className={mainSectionStyles.title}>Привет, меня зовут Влад</h1>
        <h3 className={mainSectionStyles.subtitle}>
          Я начинающий FrontEnd разработчик
        </h3>
        <Flip delay="1000">
          <ul className={mainSectionStyles.socialList}>
            <li>
              <a
                href="https://www.instagram.com/vla_pik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className={mainSectionStyles.socialListItem} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vpikta94"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className={mainSectionStyles.socialListItem} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vladislav-pikta-857676185/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className={mainSectionStyles.socialListItem} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/jadyCat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiSend className={mainSectionStyles.socialListItem} />
              </a>
            </li>
          </ul>
        </Flip>
      </main>
    </Fade>
  )
}

export default MainSection
