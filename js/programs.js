// Minimal progressive enhancement (optional):
// - Ensures keyboard focus style on <summary> behaves predictably across browsers.
// - Adds a small scroll-into-view when opening a long awards list.

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.awards-card .awards-dropdown');

  dropdowns.forEach(d => {
    const summary = d.querySelector('summary');
    if (!summary) return;

    summary.addEventListener('keydown', (e) => {
      // Space/Enter toggles details in all major browsers, but we normalize here.
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        d.open = !d.open;
      }
    });

    summary.addEventListener('click', () => {
      // If opened and near bottom, help user see content.
      if (d.open) {
        setTimeout(() => {
          const rect = d.getBoundingClientRect();
          const bottomSpace = window.innerHeight - rect.bottom;
          if (bottomSpace < 80) d.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      }
    });
  });
});
