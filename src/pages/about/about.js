import React from "react"
import Layout from "../../components/Layout/layout"
import { Fade } from "react-reveal"
import { Icon } from "@iconify/react"
import babelIcon from "@iconify/icons-logos/babel"
import nodejsIcon from "@iconify/icons-logos/nodejs"
import webpackIcon from "@iconify/icons-logos/webpack"
import es6Icon from "@iconify/icons-logos/es6"
import gulpIcon from "@iconify/icons-logos/gulp"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import reactIcon from "@iconify/icons-logos/react"
import sassIcon from "@iconify/icons-logos/sass"
import graphqlIcon from "@iconify/icons-logos/graphql"
import bootstrapIcon from "@iconify/icons-logos/bootstrap"

import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Fade left>
        <div>
          <div className={aboutStyles.about}>
            <div className={aboutStyles.aboutImgs}>
              <div className={aboutStyles.aboutImgsContent}>
                <div className={aboutStyles.aboutImgsContentAnimation}>
                  <div className={aboutStyles.aboutImgsContentAnimationRowOne}>
                    <Icon
                      icon={babelIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={nodejsIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={webpackIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={es6Icon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={gulpIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                  </div>
                  <div className={aboutStyles.aboutImgsContentAnimationRowTwo}>
                    <Icon
                      icon={graphqlIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={sassIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={reactIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={gatsbyIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                    <Icon
                      icon={bootstrapIcon}
                      className={aboutStyles.aboutImgsIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={aboutStyles.aboutDescriptions}>
              <h1 className={aboutStyles.aboutDescriptionsTitle}>Привет</h1>
              <p className={aboutStyles.aboutDescriptionsArticle}>
                Меня зовут Влад, живу в настоящий момент в Минске, Республика
                Беларусь. Активно увлекаюсь изучением новейших технологий в
                области front-end разработки. В настоящий момент нахожусь в
                поиске работы. В свободное время очень люблю играть в футбол.{" "}
              </p>
              <p className={aboutStyles.aboutDescriptionsArticle}>
                У меня имеется опыт работы с HTML, CSS, JavaScript, для создания
                веб-сайтов и мелких приложений. Я работал с ECMA Script 2015 и
                имею опыт работы с современными инструментами, такими как Node,
                Webpack, Babel и менеджерами пакетов npm.{" "}
              </p>
              <p className={aboutStyles.aboutDescriptionsArticle}>
                В настоящий момент изучаю и уже активно использую в своих
                проектах React, Graphql, Sass, Gatsby
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </Layout>
  )
}

export default AboutPage
