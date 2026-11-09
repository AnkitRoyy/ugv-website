// "Label — value" strings -> a label/value row (sans-serif, aligned), not a typewriter line
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
export function specRows(list) {
  return list.map((line) => {
    const [k, ...rest] = String(line).split(' — ');
    return rest.length ? `<div><span>${esc(k)}</span><b>${esc(rest.join(' — '))}</b></div>` : `<div><b>${esc(k)}</b></div>`;
  }).join('');
}
