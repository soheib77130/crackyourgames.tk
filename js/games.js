(function () {
  const input = document.getElementById('game-search');
  const cards = Array.from(document.querySelectorAll('.game-card'));
  const emptyState = document.getElementById('empty-state');

  if (!input || cards.length === 0 || !emptyState) {
    return;
  }

  input.addEventListener('input', function (event) {
    const query = event.target.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(function (card) {
      const haystack = card.dataset.search || '';
      const match = haystack.includes(query);
      card.hidden = !match;
      if (match) {
        visible += 1;
      }
    });

    emptyState.hidden = visible !== 0;
  });
})();
