// setup/main.ts
import { defineAppSetup } from "@slidev/types";
// @ts-ignore
import { images } from "../styles";

export default defineAppSetup(({ app }) => {
  // 设置 CSS 变量
  const style = document.documentElement.style;
  style.setProperty("--kintone-header-img", images.header);
  style.setProperty("--kintone-footer-img", images.footer);
  // style.setProperty("--kintone-logo-img", images.logo);
});
