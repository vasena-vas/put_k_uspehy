import { Link, useParams } from 'react-router-dom';
import { news } from '../data';
export default function NewsArticle() { const { id } = useParams(); const item = news.find(n=>String(n.id)===id); return <main className="sec inner article"><Link className="btn back" to="/news">← Все новости</Link>{item ? <><h1>{item.title}</h1><time>{item.date}</time><div className="article-body"><p>{item.body || 'Полный текст не включён в демонстрационные данные. Сохраните исходный файл data и существующие страницы новостей при интеграции.'}</p></div></> : <h1>Новость не найдена</h1>}</main>; }
