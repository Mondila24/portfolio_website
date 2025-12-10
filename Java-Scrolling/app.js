window.addEventListener('scroll', () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0.5 * window.innerHeight) {
            row.classList.add('active');
            row.classList.remove('inactive');
        } else {
            row.classList.remove('active');
            row.classList.add('inactive');
        }
    });
});
