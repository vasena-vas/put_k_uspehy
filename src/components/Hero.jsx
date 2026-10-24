import { artwork } from '../assets';
import { LINKS } from '../config';
import ActionLink from './ActionLink';

export default function Hero() {
  return (
    <section className="hero">
      <svg
        className="hero-track"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M52 -15 C225 75 175 275 268 422 C378 590 770 615 1065 518 C1225 465 1360 408 1475 345"
          fill="none"
          stroke="#f5f5f5"
          strokeWidth="48"
          strokeDasharray="245 58"
        />
      </svg>
      <h3>Направления олимпиады</h3>
      <h1 className="d">Путь к успеху</h1>
      <div className="hero-row">
        <ActionLink className="btn" href={LINKS.registration}>
          Принять участие <i className="ic ic-arrow" />
        </ActionLink>
        <p className="red">
          До 10 доп. баллов при поступлении
          <br />в университеты по всей России
        </p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <img src={artwork.yellow} width="523" height="539" alt="" fetchPriority="high" />
        <img src={artwork.red} width="482" height="559" alt="" fetchPriority="high" />
      </div>
    </section>
  );
}
