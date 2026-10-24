import { useEffect, useRef, useState } from 'react';

/** Нативный details: плавная высота в обе стороны, включая быстрые повторные клики. */
export default function SmoothDetails({ className = '', summary, children }) {
  const detailsRef = useRef(null);
  const panelRef = useRef(null);
  const animationRef = useRef(null);
  const targetRef = useRef(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => () => animationRef.current?.cancel(), []);

  function toggle(event) {
    event.preventDefault();
    const el = detailsRef.current;
    const start = el.getBoundingClientRect().height;
    animationRef.current?.cancel();
    const next = !targetRef.current;
    targetRef.current = next;
    setExpanded(next);
    // Открываем до измерения: закрытый details скрывает всё после summary.
    el.open = true;
    el.style.height = 'auto';
    const summaryHeight = el.querySelector('summary').getBoundingClientRect().height;
    const end = summaryHeight + (next ? panelRef.current.getBoundingClientRect().height : 0);
    panelRef.current.inert = !next;

    function finish() {
      el.open = next;
      el.style.height = '';
      delete el.dataset.animating;
      animationRef.current = null;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !el.animate) {
      finish();
      return;
    }
    el.style.height = `${start}px`;
    el.dataset.animating = 'true';
    const animation = el.animate(
      [{ height: `${start}px` }, { height: `${end}px` }],
      { duration: 320, easing: 'cubic-bezier(.22, 1, .36, 1)' }
    );
    animationRef.current = animation;
    animation.onfinish = finish;
  }

  return <details ref={detailsRef} className={`smooth-details ${className}`}>
    <summary onClick={toggle} aria-expanded={expanded}>{summary}</summary>
    <div ref={panelRef} className="disclosure-panel">{children}</div>
  </details>;
}
