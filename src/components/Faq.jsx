import SmoothDetails from './SmoothDetails';
import { useState } from 'react';
import { faq } from '../data';
import { artwork } from '../assets';
import { CONTACT_ENDPOINT } from '../config';
export default function Faq() {
  const [name,setName] = useState(''); const [phone,setPhone] = useState('');
  const [status,setStatus] = useState(''); const [busy,setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) { setStatus('Укажите имя и телефон (не менее 10 цифр).'); return; }
    if (!CONTACT_ENDPOINT) { setStatus('Онлайн-отправка пока не подключена. Позвоните: 8 (800) 100-19-34.'); return; }
    setBusy(true); setStatus('');
    try { const r = await fetch(CONTACT_ENDPOINT, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({name:name.trim(),phone:phone.trim()}) }); if (!r.ok) throw new Error(); setStatus('Заявка отправлена. Мы свяжемся с вами.'); setName(''); setPhone(''); }
    catch { setStatus('Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.'); }
    finally { setBusy(false); }
  }
  return <section className="black faq" id="faq"><h2 className="d h2">Часто задаваемые вопросы</h2>
    <div className="faq-grid"><div className="faq-list">{faq.map(f => <SmoothDetails className="q" key={f.q} summary={f.q}><p>{f.a}</p></SmoothDetails>)}</div><img className="faq-img" src={artwork.questhion} width="1035" height="1173" alt="" loading="lazy"/></div>
    <h2 className="d h2 ask-h">Остались вопросы?</h2>
    <div className="ask"><form className="form" onSubmit={submit}><p>Оставь заявку и мы с тобой свяжемся:</p><label className="sr-only" htmlFor="contact-name">Твоё имя</label><input id="contact-name" name="name" autoComplete="given-name" placeholder="Твоё имя (Иван)" value={name} onChange={e=>setName(e.target.value)} required maxLength={100}/><label className="sr-only" htmlFor="contact-phone">Твой номер телефона</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Твой номер телефона" value={phone} onChange={e=>setPhone(e.target.value)} required maxLength={30}/><button className="btn btn-o wide" disabled={busy} type="submit">{busy ? 'Отправляем…' : 'Отправить заявку'}</button>{status && <p className="form-status" role="status">{status}</p>}</form>
    <div className="contact"><span>Или свяжись с нами:</span><a href="tel:88001001934"><span className="contact-icon" aria-hidden="true">☎</span>8 (800) 100-19-34</a></div></div>
  </section>;
}
