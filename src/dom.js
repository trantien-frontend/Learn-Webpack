import oilBG from "./assets/images/oil-bg.jpg";
import cybersoft from "./Public/pdf/CyberSoft.pdf";

export const render = () => {
  document.body.style.backgroundImage = `url(${oilBG})`;

  const link = document.createElement("a");
  link.textContent = "Redirect PDF";
  link.setAttribute("href", cybersoft);

  document.body.appendChild(link);
};
