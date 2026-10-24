import { LINKS } from '../config';
import ActionLink from './ActionLink';
export default function Footer() {
  return <footer className="footer"><span>ФГБОУ ВО «МГТУ им. Г.И. Носова», NMSTU<br/>Россия, 455000, г. Магнитогорск, пр. Ленина, 38</span><div className="soc">Мы в соц. сетях:<span><ActionLink className="social-icon" href={LINKS.telegram} aria-label="Telegram">➤</ActionLink><ActionLink className="social-icon" href={LINKS.vk} aria-label="ВКонтакте">VK</ActionLink></span></div><a href="tel:88001001934">8 (800) 100-19-34</a></footer>;
}
