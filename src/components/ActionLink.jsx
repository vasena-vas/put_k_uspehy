export default function ActionLink({ href, children, className = '', ...props }) {
  return href ? <a className={className} href={href} {...props}>{children}</a> :
    <button type="button" className={className} aria-disabled="true" title="Ссылка пока не настроена" onClick={() => window.alert('Ссылка пока не настроена. Обратитесь к организаторам: 8 (800) 100-19-34.')} {...props}>{children}</button>;
}
