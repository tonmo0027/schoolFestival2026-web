'use strict';
const cards = [...document.querySelectorAll('.game')];
const search = document.querySelector('#search');
const normalize = value => value.normalize('NFKC').toLowerCase().replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60)).replace(/[\s（）()・]/g, '');
document.querySelector('.tools').hidden = false;
function filterGames() {
  const query = normalize(search.value);
  let count = 0;
  cards.forEach(card => {
    card.hidden = !normalize(card.dataset.name).includes(query);
    if (!card.hidden) count++;
  });
  document.querySelector('#result-count').textContent = `${count}種類を表示`;
  document.querySelector('#no-results').hidden = count !== 0;
}
search.addEventListener('input', filterGames);
let previous = null;
document.querySelector('#random').addEventListener('click', () => {
  const visible = cards.filter(card => !card.hidden);
  const status = document.querySelector('#random-result');
  if (!visible.length) { status.textContent = '検索を消してから、もう一度選んでみてください。'; return; }
  const pool = visible.length > 1 ? visible.filter(card => card !== previous) : visible;
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  cards.forEach(card => card.classList.remove('picked'));
  chosen.classList.add('picked');
  previous = chosen;
  const link = document.createElement('a');
  link.href = `#${chosen.id}`;
  link.textContent = `${chosen.dataset.name}はいかが？`;
  status.replaceChildren(link);
});

filterGames();
