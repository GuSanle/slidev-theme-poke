// inherit from base layouts, remove it to get full customizations
import "@slidev/client/styles/layouts-base.css";
import "./layout.css";
import "./kintone.css";
// @ts-ignore
import headerImg from "../assets/header.png";
// @ts-ignore
import footerImg from "../assets/footer.png";
// @ts-ignore
import logoImg from "../assets/kintone.png";

export const images = {
  header: `url(${headerImg})`,
  footer: `url(${footerImg})`,
  logo: `url(${logoImg})`,
};
