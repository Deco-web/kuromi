/* ═══════════════════════════════════════════
   KUROMI — js/main.js
═══════════════════════════════════════════ */

/* ──────────── PARTÍCULAS — detalhes pretos da Kuromi ──────────── */
;(function () {
    const container = document.getElementById('particles');
    const symbols   = ['☠', '★', '♪', '✦', '◆', '✧', '♥', '✾'];
    const colors    = [
        'rgba(20,0,50,.48)',
        'rgba(20,0,50,.42)',
        'rgba(109,40,217,.38)',
        'rgba(190,24,93,.36)',
        'rgba(20,0,50,.52)',
    ];

    function spawn() {
        const el  = document.createElement('div');
        el.className = 'pitem';
        el.textContent = symbols[Math.random() * symbols.length | 0];
        const dur = (Math.random() * 9 + 9).toFixed(1);
        el.style.cssText = [
            `left:${(Math.random() * 100).toFixed(1)}vw`,
            `color:${colors[Math.random() * colors.length | 0]}`,
            `font-size:${(Math.random() * 10 + 8).toFixed(0)}px`,
            `animation-duration:${dur}s`,
            `animation-delay:${(Math.random() * 2).toFixed(1)}s`
        ].join(';');
        container.appendChild(el);
        setTimeout(() => el.remove(), 22000);
    }

    setInterval(spawn, 1400);
    for (let i = 0; i < 6; i++) setTimeout(spawn, i * 300);
}());

/* ──────────── NAVEGAÇÃO + REVEAL ──────────── */
;(function () {

    /* Revela elementos .anim de uma seção com stagger */
    function revealSection(sec) {
        sec.querySelectorAll('.anim:not(.in)').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), 80 + i * 90);
        });
    }

    /* Troca de seção */
    function switchTo(id) {
        const current = document.querySelector('.sec.active');
        const next    = document.getElementById(id);
        if (current === next) return;

        current.classList.remove('active');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

        next.classList.add('active');
        next.scrollTop = 0;
        document.querySelector(`[data-target="${id}"]`).classList.add('active');

        /* Revela conteúdo de seções que não são a home */
        if (id !== 'home') revealSection(next);
    }

    /* Botões do nav */
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTo(btn.dataset.target));
    });

    /* ── Scroll reveal da home via IntersectionObserver ── */
    const homeSection = document.getElementById('home');

    const io = new IntersectionObserver(entries => {
        const batch = entries.filter(e => e.isIntersecting);
        batch.forEach((entry, i) => {
            setTimeout(() => entry.target.classList.add('in'), i * 90);
            io.unobserve(entry.target);
        });
    }, {
        root:       homeSection,
        threshold:  0.1,
        rootMargin: '0px 0px -24px 0px'
    });

    homeSection.querySelectorAll('.anim').forEach(el => io.observe(el));

    /* Indicador de scroll some ao rolar na home */
    homeSection.addEventListener('scroll', function hide() {
        if (homeSection.scrollTop > 60) {
            homeSection.removeEventListener('scroll', hide);
        }
    }, { passive: true });

}());
