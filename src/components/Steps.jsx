import { steps } from '../data';
import { artwork } from '../assets';
import { LINKS } from '../config';
import ActionLink from './ActionLink';

export default function Steps() {
  const targets = [LINKS.registration, LINKS.qualifying, LINKS.final];
  return (
    <section className="sec steps">
      <h2 className="d h2">Как принять участие?</h2>
      <div className="cards">
        {steps.map(([text, hover], i) => (
          <ActionLink className={`step${i === 2 ? ' s3' : ''}`} href={targets[i]} key={text}>
            <span className={`tag t${i + 1}`}>
              <span className="d">Шаг</span>
              <b>#{i + 1}</b>
            </span>
            <span className="step-copy">
              <span className="lab">{text}</span>
              <span className="lab-h">
                {hover} <i className="ic ic-arrow" />
              </span>
            </span>
          </ActionLink>
        ))}
      </div>
      <div className="journey" aria-hidden="true">
        <img className="journey-layer journey-track" src={artwork.run} width="2392" height="642" alt="" loading="lazy" />
        <img className="journey-layer journey-star" src={artwork.run} width="2392" height="642" alt="" loading="lazy" />
        <img className="journey-layer journey-owl" src={artwork.run} width="2392" height="642" alt="" loading="lazy" />
      </div>
    </section>
  );
}
