import { Link } from 'react-router-dom';
import NewsList from './NewsList';
export default function NewsPreview() { return <section className="sec" id="news"><h2 className="d h2">Новости олимпиады</h2><NewsList limit={4}/><Link className="btn more" to="/news">Больше новостей</Link></section>; }
