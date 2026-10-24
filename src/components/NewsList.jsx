import { Link } from 'react-router-dom';
import { news } from '../data';
export default function NewsList({limit}) { return <>{(limit ? news.slice(0,limit) : news).map(n => <article className="news-item" key={n.id}><div><h4>{n.title}</h4><time>{n.date}</time></div><Link className="btn" to={`/news/${n.id}`}>Читать полностью</Link></article>)}</>; }
