/* ═══════════════════════════════════════════
   KUROMI — js/main.js
═══════════════════════════════════════════ */

/* ──────────── SPLASH ──────────── */
;(function () {
    const splash = document.getElementById('splash');
    const btn    = document.getElementById('splashBtn');
    btn.addEventListener('click', () => {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 650);
    });
}());

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

/* ──────────── MÚSICAS ──────────── */
;(function () {

    /* ════ EDITE AQUI AS MÚSICAS DEDICADAS ════
       title: nome da música
       artist: nome do artista
       cover: caminho da capa (use assets/img/ por enquanto)
       dedication: o texto que você escreveu pra ela
    */
    const DEDICADAS = [
        { title: "Neon Genesis Evangelion II",                          artist: "Bella e Olmo",        cover: "assets/img/kuromi-love.png",    audio: "assets/audio/01-neon-genesis.mp3",      dedication: "" },
        { title: "The End of Evangelion",                               artist: "Bella e Olmo",        cover: "assets/img/kuromi-hearts.png",  audio: "assets/audio/02-end-of-evangelion.mp3", dedication: "" },
        { title: "Valentina",                                           artist: "Bella e Olmo",        cover: "assets/img/kuromi-hello.png",   audio: "assets/audio/03-valentina.mp3",         dedication: "" },
        { title: "Your Lips Are My Cigarette",                          artist: "cursedcry",           cover: "assets/img/kuromi-happy.png",   audio: "assets/audio/04-your-lips.mp3",         dedication: "" },
        { title: "Só Nós Dois",                                         artist: "Tim Bernardes",       cover: "assets/img/kuromi-sit.png",     audio: "assets/audio/05-so-nos-dois.mp3",       dedication: "" },
        { title: "Um Amor Puro",                                        artist: "Djavan",              cover: "assets/img/kuromi-flower.png",  audio: "assets/audio/06-um-amor-puro.mp3",      dedication: "" },
        { title: "Swing Lynn",                                          artist: "Harmless",            cover: "assets/img/kuromi-tea.png",     audio: "assets/audio/07-swing-lynn.mp3",        dedication: "" },
        { title: "You Are My Destiny",                                  artist: "Paul Anka",           cover: "assets/img/kuromi-pose.png",    audio: "assets/audio/08-you-are-my-destiny.mp3",dedication: "" },
        { title: "Quando Bate Aquela Saudade",                          artist: "Rubel",               cover: "assets/img/kuromi-classic.png", audio: "assets/audio/09-quando-bate.mp3",       dedication: "" },
        { title: "This I Love",                                         artist: "Guns N' Roses",       cover: "assets/img/kuromi-curious.png", audio: "assets/audio/10-this-i-love.mp3",       dedication: "" },
        { title: "Self Aware",                                          artist: "Temper City",         cover: "assets/img/kuromi-tail.png",    audio: "assets/audio/11-self-aware.mp3",        dedication: "" },
        { title: "Heaven Can Wait",                                     artist: "Michael Jackson",     cover: "assets/img/kuromi-love.png",    audio: "assets/audio/12-heaven-can-wait.mp3",   dedication: "" },
        { title: "Don't Let Me Down (The Rooftop Performance, Take 1)", artist: "The Beatles",         cover: "assets/img/kuromi-hearts.png",  audio: "assets/audio/13-dont-let-me-down.mp3",  dedication: "" },
        { title: "Kingston",                                            artist: "Faye Webster",        cover: "assets/img/kuromi-hello.png",   audio: "assets/audio/14-kingston.mp3",          dedication: "" },
        { title: "Big Jet Plane",                                       artist: "Angus & Julia Stone", cover: "assets/img/kuromi-happy.png",   audio: "assets/audio/15-big-jet-plane.mp3",     dedication: "" },
    ];

    /* Renderiza os cards na sub-página */
    const list = document.getElementById('songs-list');
    DEDICADAS.forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <div class="sc-cover">
                <img src="${song.cover}" alt="${song.title}" loading="lazy">
                <div class="sc-play"><span></span></div>
            </div>
            <div class="sc-info">
                <p class="sc-title">${song.title}</p>
                <p class="sc-artist">${song.artist}</p>
            </div>
            <span class="sc-arrow">›</span>
        `;
        card.addEventListener('click', () => openModal(song));
        list.appendChild(card);
    });

    /* Modal + player de áudio */
    const modal      = document.getElementById('song-modal');
    const modalBg    = modal.querySelector('.smodal-bg');
    const closeBtn   = modal.querySelector('.smodal-close');
    const playBtn    = modal.querySelector('.smodal-play-btn');
    const audio      = document.getElementById('smodal-audio');
    const progressFill = document.getElementById('smodal-progress-fill');
    const progressWrap = document.getElementById('smodal-progress-wrap');
    const timeCur    = document.getElementById('smodal-time-cur');
    const timeTot    = document.getElementById('smodal-time-tot');

    function fmt(s) {
        const m = Math.floor(s / 60);
        return m + ':' + String(Math.floor(s % 60)).padStart(2, '0');
    }

    function setPlaying(state) {
        playBtn.classList.toggle('playing', state);
    }

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = pct + '%';
        timeCur.textContent = fmt(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        timeTot.textContent = fmt(audio.duration);
    });

    audio.addEventListener('ended', () => setPlaying(false));

    playBtn.addEventListener('click', () => {
        if (audio.paused) { audio.play(); setPlaying(true); }
        else              { audio.pause(); setPlaying(false); }
    });

    progressWrap.addEventListener('click', e => {
        if (!audio.duration) return;
        const rect = progressWrap.getBoundingClientRect();
        audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    });

    function openModal(song) {
        audio.pause();
        audio.src = song.audio || '';
        audio.currentTime = 0;
        progressFill.style.width = '0%';
        timeCur.textContent = '0:00';
        timeTot.textContent = '0:00';
        setPlaying(false);

        document.getElementById('smodal-img').src            = song.cover;
        document.getElementById('smodal-title').textContent  = song.title;
        document.getElementById('smodal-artist').textContent = song.artist;
        document.getElementById('smodal-ded-text').textContent =
            song.dedication || 'em breve... 💜';
        modal.classList.add('open');
    }

    function closeModal() {
        audio.pause();
        setPlaying(false);
        modal.classList.remove('open');
    }

    closeBtn.addEventListener('click', closeModal);
    modalBg.addEventListener('click', closeModal);

    /* "Músicas que te dedico" abre a sub-página */
    document.querySelector('[data-title="Músicas que te dedico"]')
        .addEventListener('click', () => window.switchTo('dedicadas'));

    /* Os outros cards abrem o modal diretamente */
    document.querySelectorAll('.music-card:not([data-title="Músicas que te dedico"])').forEach(card => {
        card.addEventListener('click', () => openModal({
            cover: card.dataset.cover,
            title: card.dataset.title,
            artist: card.dataset.sub,
            dedication: card.dataset.ded,
        }));
    });

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

        const isSubPage = next.classList.contains('sub-page');
        if (!isSubPage) {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            const navBtn = document.querySelector(`[data-target="${id}"]`);
            if (navBtn) navBtn.classList.add('active');
        }

        next.classList.add('active');
        next.scrollTop = 0;

        if (id !== 'home') revealSection(next);
    }

    /* Expõe switchTo globalmente para o módulo de músicas */
    window.switchTo = switchTo;

    /* Botões do nav */
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTo(btn.dataset.target));
    });

    /* Botão de voltar (sub-páginas) */
    document.querySelectorAll('.back-btn').forEach(btn => {
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
