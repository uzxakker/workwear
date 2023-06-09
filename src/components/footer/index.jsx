import React, { useEffect } from "react";
import styles from "./style.module.css";
import { BigContainer } from "../../style-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CategoryGet } from "../../redux/category/index";

import logo from "../../assets/header/workwearlogo.png";

const Footer = () => {
  // useEffect(() => {

  // }, [])
  const handleTop = () => {
    window.scrollTo(0, 0)
  }
  const { t } = useTranslation();
  const dispatch = useDispatch()
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const categoryGets = useSelector((state) => state.category.categoryGet?.data)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])
  return (
    <>
      <div className={styles.footer_section}>
        <BigContainer>
          <Row className={styles.footer_row}>
            <Col className={styles.footer_col} lg={3} md={6} sm={12}>
              <div className={styles.logo_box}>
                <NavLink to="/" className={styles.img_links}>
                  <img height={53} src={logo} alt="logo" />
                </NavLink>
                <br />
                <p></p>
                <a className={styles.underline} href="tel:+998 (71) 279 85 47">
                  +998 (71) 279 85 47
                </a>
                <br />
                <a className={styles.underline} href="tel:+998 (71) 279 88 47">
                  +998 (71) 279 88 47
                </a>
                <br />
                {/* <a href="mailto:example@gmail.com">example@gmail.com</a> */}
                {/* <div className={styles.social_box}>
                  <a href="#">
                    <i
                      style={{ color: "#1877F2" }}
                      class="bx bxl-facebook-circle"
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      style={{ color: "#EC3397" }}
                      class="bx bxl-instagram"
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      style={{ color: "#0A66C2" }}
                      class="bx bxl-linkedin-square"
                    ></i>
                  </a>
                </div> */}
              </div>
            </Col>
            <Col className={styles.footer_col} lg={3} md={6} sm={6}>
              <h4>{t("Footer.1")}</h4>
              <ul className={styles.footer_list}>
                {
                  categoryGets.map(elem => (
                    <li>
                      <NavLink onClick={handleTop} to={`/catalog/${elem.id}`}>
                        {LanguValue() === "ru" ? (
                          elem.title_ru
                        ) : LanguValue() === "uz" ? (
                          elem.title_uz
                        ) : LanguValue() === "en" ? (
                          elem.title_en
                        ) : (
                          elem.title_ru
                        )}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </Col>
            <Col className={styles.footer_col} lg={3} md={6} sm={6}>
              <h4>{t("Footer.6")}</h4>
              <ul className={styles.footer_list}>
                <li>
                  <NavLink to="/services">{t("Header.1")}</NavLink>
                </li>
                <li>
                  <NavLink to="/custumer">{t("Header.2")}</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutme">{t("Header.3")}</NavLink>
                </li>
                <li>
                  <NavLink to="/news">{t("Header.4")}</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">{t("Header.5")}</NavLink>
                </li>
              </ul>
            </Col>
            <Col className={styles.footer_col} lg={3} md={6} sm={12}>
              <div className={styles.zaproz_box}>
                <h4>{t("Footer.7")}</h4>
                <p>{t("Footer.8")}</p>

                <form className={styles.footer_form}>
                  <input type="tel" defaultValue="+998" />
                  <button type="submit">
                    <i class="bx bxs-right-arrow-circle"></i>
                  </button>
                </form>
              </div>
            </Col>
          </Row>
          <div className={styles.mini_bar}>
            <p>
              © 2022 . All rights reserved.{" "}
              <a href="https://supersite.uz">SuperSite.uz</a>
            </p>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default Footer;
