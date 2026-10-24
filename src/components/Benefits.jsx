import { benefits } from '../data';
import { artwork, benefitArtwork } from '../assets';
export default function Benefits() {
  return <section className="sec"><h2 className="d h2">Что ты получишь?</h2><div className="cards">{benefits.map(([img,title,text], i) => <article className="card" key={title}><img src={artwork[img] || benefitArtwork[i % benefitArtwork.length]} alt="" width="164" height="164" loading="lazy"/><div><h4>{title}</h4><p>{text}</p></div></article>)}</div></section>;
}
