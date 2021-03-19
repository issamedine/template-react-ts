import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import hoverImgShop from "../../assets/imgs/hover-boutique-menu.png";
import "./navbar.scss";

const Navbar: React.FC = () => {
  const [toggleNavMobile, setToggleNavMobile] = useState<boolean>(false);

  const handleShowNavMobile = () => {
    setToggleNavMobile(true);
  };
  const handleHideNavMobile = () => {
    setToggleNavMobile(false);
  };

  return (
    <div className="wrapper-navbar">
      {toggleNavMobile && (
        <div className={`wrapper-nav-link-mobile`}>
          <span className="close-btn" onClick={() => handleHideNavMobile()}>
            x
          </span>
          <div className="accueil 20%">
            <Link to="/" onClick={() => handleHideNavMobile()}>
              Accueil
            </Link>
          </div>
          <div className="boutique 20%">
            <Link to="/boutique" onClick={() => handleHideNavMobile()}>
              Boutique
            </Link>
          </div>
          <div className="realisation 20%">
            <Link to="/" onClick={() => handleHideNavMobile()}>
              Nos réalisations
            </Link>
          </div>
          <div className="contact 20%">
            <Link to="/" onClick={() => handleHideNavMobile()}>
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
      <div className="wrapper-line w-90%">
        <div className="d-flex">
          <div className="first-line">
            <div className="item-first-line-logo 33.3%">logo</div>
            <div className="item-first-line-search 33.3%">
              <span className="first-icon-search">
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Recherche" />
              <span className="second-icon-search">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <div className="item-first-line 33.3%">
              <div className="location 50%">
                <span className="first-icon-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.6"
                    height="27.592"
                    viewBox="0 0 19.6 27.592"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(-15.2 -8.4)">
                      <g transform="translate(15.2 8.4)">
                        <path
                          className="a"
                          d="M-207-340.008l-.525-.642c-.35-.467-9.275-10.908-9.275-17.15a9.821,9.821,0,0,1,9.8-9.8,9.859,9.859,0,0,1,9.8,9.8c0,6.242-8.925,16.742-9.275,17.15l-.525.642Zm0-26.25a8.4,8.4,0,0,0-8.4,8.4c0,4.9,6.475,13.242,8.4,15.633,1.925-2.392,8.4-10.675,8.4-15.633a8.4,8.4,0,0,0-8.4-8.4Z"
                          transform="translate(216.8 367.6)"
                        />
                        <path
                          className="a"
                          d="M-202.667-349.733a3.759,3.759,0,0,1-3.733-3.733,3.759,3.759,0,0,1,3.733-3.733,3.759,3.759,0,0,1,3.733,3.733,3.759,3.759,0,0,1-3.733,3.733Zm0-6.067A2.34,2.34,0,0,0-205-353.467a2.34,2.34,0,0,0,2.333,2.333,2.34,2.34,0,0,0,2.333-2.333,2.34,2.34,0,0,0-2.333-2.333Z"
                          transform="translate(212.467 363.267)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span>Notre magasin</span>
                <span className="second-icon-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.6"
                    height="27.592"
                    viewBox="0 0 19.6 27.592"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(-15.2 -8.4)">
                      <g transform="translate(15.2 8.4)">
                        <path
                          className="a"
                          d="M-207-340.008l-.525-.642c-.35-.467-9.275-10.908-9.275-17.15a9.821,9.821,0,0,1,9.8-9.8,9.859,9.859,0,0,1,9.8,9.8c0,6.242-8.925,16.742-9.275,17.15l-.525.642Zm0-26.25a8.4,8.4,0,0,0-8.4,8.4c0,4.9,6.475,13.242,8.4,15.633,1.925-2.392,8.4-10.675,8.4-15.633a8.4,8.4,0,0,0-8.4-8.4Z"
                          transform="translate(216.8 367.6)"
                        />
                        <path
                          className="a"
                          d="M-202.667-349.733a3.759,3.759,0,0,1-3.733-3.733,3.759,3.759,0,0,1,3.733-3.733,3.759,3.759,0,0,1,3.733,3.733,3.759,3.759,0,0,1-3.733,3.733Zm0-6.067A2.34,2.34,0,0,0-205-353.467a2.34,2.34,0,0,0,2.333,2.333,2.34,2.34,0,0,0,2.333-2.333,2.34,2.34,0,0,0-2.333-2.333Z"
                          transform="translate(212.467 363.267)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="config 50%">
                <span className="first-icon-config">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70.378"
                    height="46.886"
                    viewBox="0 0 70.378 46.886"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(-2 -12.028)">
                      <path
                        className="a"
                        d="M57,43h4.692v4.692H57Z"
                        transform="translate(9.513 5.357)"
                      />
                      <path
                        className="a"
                        d="M57,27h4.692v4.692H57Z"
                        transform="translate(9.513 2.59)"
                      />
                      <path
                        className="a"
                        d="M36.038,57.573h9.384V20.038L40.73,13l-4.692,7.038v9.384H29v4.692h7.038V48.189H29v4.692h7.038Z"
                        transform="translate(4.67 0.168)"
                      />
                      <path
                        className="a"
                        d="M7.692,57.573h9.384V20.038L12.384,13,7.692,20.038v9.384H3v4.692H7.692V48.189H3v4.692H7.692Z"
                        transform="translate(0.173 0.168)"
                      />
                      <g transform="translate(2 12.028)">
                        <path
                          className="b"
                          d="M24,23h2.346V47.632H24Z"
                          transform="translate(1.805 -10.131)"
                        />
                        <path
                          className="b"
                          d="M24,46h2.346v2.346H24Z"
                          transform="translate(1.805 -6.152)"
                        />
                        <path
                          className="b"
                          d="M52,23h2.346V47.632H52Z"
                          transform="translate(6.649 -10.131)"
                        />
                        <path
                          className="b"
                          d="M52,46h2.346v2.346H52Z"
                          transform="translate(6.649 -6.152)"
                        />
                        <path
                          className="b"
                          d="M38,23h2.346V47.632H38Z"
                          transform="translate(4.227 -10.131)"
                        />
                        <path
                          className="b"
                          d="M38,46h2.346v2.346H38Z"
                          transform="translate(4.227 -6.152)"
                        />
                        <path
                          className="b"
                          d="M10,23h2.346V47.632H10Z"
                          transform="translate(-0.616 -10.131)"
                        />
                        <path
                          className="b"
                          d="M10,46h2.346v2.346H10Z"
                          transform="translate(-0.616 -6.152)"
                        />
                        <path
                          className="b"
                          d="M71.205,35.455a1.173,1.173,0,0,0,1.173-1.173V29.59a1.173,1.173,0,0,0-1.173-1.173H67.686V20.206a1.18,1.18,0,0,0-.2-.651L62.8,12.517a1.219,1.219,0,0,0-1.952,0l-4.692,7.038a1.18,1.18,0,0,0-.2.651v8.211H51.265V20.206a1.18,1.18,0,0,0-.2-.651l-4.692-7.038a1.219,1.219,0,0,0-1.952,0l-4.692,7.038a1.18,1.18,0,0,0-.2.651v8.211H34.843V20.206a1.18,1.18,0,0,0-.2-.651l-4.692-7.038a1.219,1.219,0,0,0-1.952,0l-4.692,7.038a1.18,1.18,0,0,0-.2.651v8.211H18.422V20.206a1.18,1.18,0,0,0-.2-.651l-4.692-7.038a1.219,1.219,0,0,0-1.952,0L6.889,19.555a1.18,1.18,0,0,0-.2.651v8.211H3.173A1.173,1.173,0,0,0,2,29.59v4.692a1.173,1.173,0,0,0,1.173,1.173H6.692v11.73H3.173A1.173,1.173,0,0,0,2,48.357v4.692a1.173,1.173,0,0,0,1.173,1.173H6.692v3.519a1.173,1.173,0,0,0,1.173,1.173h9.384a1.173,1.173,0,0,0,1.173-1.173V54.222h4.692v3.519a1.173,1.173,0,0,0,1.173,1.173H33.67a1.173,1.173,0,0,0,1.173-1.173V54.222h4.692v3.519a1.173,1.173,0,0,0,1.173,1.173h9.384a1.173,1.173,0,0,0,1.173-1.173V54.222h4.692v3.519a1.173,1.173,0,0,0,1.173,1.173h9.384a1.173,1.173,0,0,0,1.173-1.173V54.222h3.519a1.173,1.173,0,0,0,1.173-1.173V48.357a1.173,1.173,0,0,0-1.173-1.173H67.686V35.455ZM4.346,33.109V30.763H6.692v2.346Zm0,18.768V49.53H6.692v2.346Zm11.73,4.692H9.038V20.558l3.519-5.278,3.519,5.278Zm7.038-25.805v2.346H18.422V30.763Zm0,4.692v11.73H18.422V35.455ZM18.422,51.876V49.53h4.692v2.346ZM32.5,56.568H25.459V20.558l3.519-5.278L32.5,20.558Zm7.038-25.805v2.346H34.843V30.763Zm0,4.692v11.73H34.843V35.455ZM34.843,51.876V49.53h4.692v2.346Zm14.076,4.692H41.881V20.558L45.4,15.279l3.519,5.278Zm7.038-4.692H51.265V49.53h4.692Zm0-4.692H51.265V35.455h4.692Zm0-14.076H51.265V30.763h4.692Zm9.384,23.459H58.3V20.558l3.519-5.278,3.519,5.278Zm4.692-25.805v2.346H67.686V30.763Zm0,18.768v2.346H67.686V49.53Z"
                          transform="translate(-2 -12.028)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span>Configurateur</span>
                <span className="second-icon-config">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70.378"
                    height="46.886"
                    viewBox="0 0 70.378 46.886"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <g transform="translate(-2 -12.028)">
                      <path
                        className="a"
                        d="M57,43h4.692v4.692H57Z"
                        transform="translate(9.513 5.357)"
                      />
                      <path
                        className="a"
                        d="M57,27h4.692v4.692H57Z"
                        transform="translate(9.513 2.59)"
                      />
                      <path
                        className="a"
                        d="M36.038,57.573h9.384V20.038L40.73,13l-4.692,7.038v9.384H29v4.692h7.038V48.189H29v4.692h7.038Z"
                        transform="translate(4.67 0.168)"
                      />
                      <path
                        className="a"
                        d="M7.692,57.573h9.384V20.038L12.384,13,7.692,20.038v9.384H3v4.692H7.692V48.189H3v4.692H7.692Z"
                        transform="translate(0.173 0.168)"
                      />
                      <g transform="translate(2 12.028)">
                        <path
                          className="b"
                          d="M24,23h2.346V47.632H24Z"
                          transform="translate(1.805 -10.131)"
                        />
                        <path
                          className="b"
                          d="M24,46h2.346v2.346H24Z"
                          transform="translate(1.805 -6.152)"
                        />
                        <path
                          className="b"
                          d="M52,23h2.346V47.632H52Z"
                          transform="translate(6.649 -10.131)"
                        />
                        <path
                          className="b"
                          d="M52,46h2.346v2.346H52Z"
                          transform="translate(6.649 -6.152)"
                        />
                        <path
                          className="b"
                          d="M38,23h2.346V47.632H38Z"
                          transform="translate(4.227 -10.131)"
                        />
                        <path
                          className="b"
                          d="M38,46h2.346v2.346H38Z"
                          transform="translate(4.227 -6.152)"
                        />
                        <path
                          className="b"
                          d="M10,23h2.346V47.632H10Z"
                          transform="translate(-0.616 -10.131)"
                        />
                        <path
                          className="b"
                          d="M10,46h2.346v2.346H10Z"
                          transform="translate(-0.616 -6.152)"
                        />
                        <path
                          className="b"
                          d="M71.205,35.455a1.173,1.173,0,0,0,1.173-1.173V29.59a1.173,1.173,0,0,0-1.173-1.173H67.686V20.206a1.18,1.18,0,0,0-.2-.651L62.8,12.517a1.219,1.219,0,0,0-1.952,0l-4.692,7.038a1.18,1.18,0,0,0-.2.651v8.211H51.265V20.206a1.18,1.18,0,0,0-.2-.651l-4.692-7.038a1.219,1.219,0,0,0-1.952,0l-4.692,7.038a1.18,1.18,0,0,0-.2.651v8.211H34.843V20.206a1.18,1.18,0,0,0-.2-.651l-4.692-7.038a1.219,1.219,0,0,0-1.952,0l-4.692,7.038a1.18,1.18,0,0,0-.2.651v8.211H18.422V20.206a1.18,1.18,0,0,0-.2-.651l-4.692-7.038a1.219,1.219,0,0,0-1.952,0L6.889,19.555a1.18,1.18,0,0,0-.2.651v8.211H3.173A1.173,1.173,0,0,0,2,29.59v4.692a1.173,1.173,0,0,0,1.173,1.173H6.692v11.73H3.173A1.173,1.173,0,0,0,2,48.357v4.692a1.173,1.173,0,0,0,1.173,1.173H6.692v3.519a1.173,1.173,0,0,0,1.173,1.173h9.384a1.173,1.173,0,0,0,1.173-1.173V54.222h4.692v3.519a1.173,1.173,0,0,0,1.173,1.173H33.67a1.173,1.173,0,0,0,1.173-1.173V54.222h4.692v3.519a1.173,1.173,0,0,0,1.173,1.173h9.384a1.173,1.173,0,0,0,1.173-1.173V54.222h4.692v3.519a1.173,1.173,0,0,0,1.173,1.173h9.384a1.173,1.173,0,0,0,1.173-1.173V54.222h3.519a1.173,1.173,0,0,0,1.173-1.173V48.357a1.173,1.173,0,0,0-1.173-1.173H67.686V35.455ZM4.346,33.109V30.763H6.692v2.346Zm0,18.768V49.53H6.692v2.346Zm11.73,4.692H9.038V20.558l3.519-5.278,3.519,5.278Zm7.038-25.805v2.346H18.422V30.763Zm0,4.692v11.73H18.422V35.455ZM18.422,51.876V49.53h4.692v2.346ZM32.5,56.568H25.459V20.558l3.519-5.278L32.5,20.558Zm7.038-25.805v2.346H34.843V30.763Zm0,4.692v11.73H34.843V35.455ZM34.843,51.876V49.53h4.692v2.346Zm14.076,4.692H41.881V20.558L45.4,15.279l3.519,5.278Zm7.038-4.692H51.265V49.53h4.692Zm0-4.692H51.265V35.455h4.692Zm0-14.076H51.265V30.763h4.692Zm9.384,23.459H58.3V20.558l3.519-5.278,3.519,5.278Zm4.692-25.805v2.346H67.686V30.763Zm0,18.768v2.346H67.686V49.53Z"
                          transform="translate(-2 -12.028)"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div style={{width:"10%", backgroundColor:"#fff"}}></div>
          <div className="d-lg-none d-block wrapper-btn">
            <div className="btn-nav-menu">
              <i
                className="fas fa-bars"
                onClick={() => handleShowNavMobile()}
              ></i>
            </div>
          </div>
        </div>
        <div className="custom-second-line">
          <div className="second-line position-relative">
            <div className="wrapper-nav-link">
              <div className="item-nav-link-empty 10%"></div>
              <div className="item-nav-link-accueil 20%">
                <Link to="/">Accueil</Link>
              </div>
              <div className="item-nav-link-boutique 20%">
                <ul
                  style={{
                    backgroundImage: `url(${hoverImgShop})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    backgroundBlendMode: "darken",
                    height: "100%",
                  }}
                >
                  <li>Lame composite</li>
                  <li>Lame en bois</li>
                  <li>Panneau bois</li>
                  <li>Grille rigide</li>
                  <li>Gabion</li>
                </ul>
                <div className="title">
                  <Link to="/boutique">Boutique</Link>
                </div>
              </div>
              <div className="item-nav-link-realisation 20%">
                <Link to="#">Nos réalisations</Link>
              </div>
              <div className="item-nav-link-contact 20%">
                <div className="content">
                  <div
                    style={{
                      backgroundImage: `url(${hoverImgShop})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left",
                      backgroundBlendMode: "darken",
                      height: "30%",
                    }}
                  >
                    Coordonnées & Map
                  </div>
                </div>
                <div className="title">
                  <Link to="#">Contactez-nous</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
