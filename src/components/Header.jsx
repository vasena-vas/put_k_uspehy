import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_DATE_LABEL, LINKS, BRAND_LOGO } from '../config';
import ActionLink from './ActionLink';
export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  function jump(id) {
    setOpen(false);
    if (pathname !== '/') navigate('/#' + id);
    else { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); window.history.replaceState(null, '', '/#' + id); }
  }
  return <>
    <header className="header">
      <Link className="logo" to="/" aria-label="Путь к успеху — главная">
        <img className="brand-logo" src={BRAND_LOGO} alt="" width="98" height="108"/>
        <span><small>Олимпиада школьников МГТУ им. Г.И. Носова</small><b>ПУТЬ К УСПЕХУ</b></span>
      </Link>
      <div className="header-r"><p className="red">Зарегистрируйся<br/>до {REGISTRATION_DATE_LABEL}</p><ActionLink className="btn" href={LINKS.account}>Личный кабинет <i className="ic ic-arrow"/></ActionLink></div>
      <button className="menu-toggle" type="button" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span/><span/><span/></button>
    </header>
    <nav id="main-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Основная навигация"><div className="nav-inner">
      <button className="btn" onClick={() => jump('directions')}>Направления олимпиады</button>
      <button className="btn" onClick={() => jump('faq')}>Часто задаваемые вопросы</button>
      <NavLink className="btn" to="/news" onClick={() => setOpen(false)}>Новости</NavLink>
      <div className="mobile-account"><p className="red">Зарегистрируйся до {REGISTRATION_DATE_LABEL}</p><ActionLink className="btn" href={LINKS.account}>Личный кабинет <i className="ic ic-arrow"/></ActionLink></div>
    </div></nav>
  </>;
}
