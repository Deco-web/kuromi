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
        { title: "Neon Genesis Evangelion II",                          artist: "Bella e Olmo",        cover: "assets/img/kuromi-love.png",    audio: "assets/audio/01-neon-genesis.mp3",      dedication: "Meu amor, mesmo que você não veja o quão linda é, eu vejo. Infelizmente, você é uma pessoa muito insegura, e eu sinceramente não vejo sentido nisso, porque você é uma pessoa perfeita, maravilhosa e linda: de espírito, corpo, alma e jeito.\n\nO amor que você desencadeia é surreal. É um dom somente seu, que me atinge muito forte. Amo o seu jeitinho de preocupações e como fica tímida com tudo... Gostaria muito que você se visse como eu te vejo, assim conseguiria entender do que estou falando.\n\nEu te amo, minha princesa." },
        { title: "The End of Evangelion",                               artist: "Bella e Olmo",        cover: "assets/img/kuromi-hearts.png",  audio: "assets/audio/02-end-of-evangelion.mp3", dedication: "Meu amor, eu sei que você é uma pessoa muito ansiosa, e muitas vezes acaba criando umas paranoias sem sentido. Mas sei que esse é seu jeito, e isso que me encanta. Por mais que a sua mente realmente não condiz com a realidade, eu tô aqui pra te lembrar que tem sim alguém que se importa com você, que te acha linda e maravilhosa.\n\nQuando as coisas ficam pesadas e a minha primeira reação é querer me isolar no meu canto, sempre pensei que nunca iria conseguir mudar esse meu jeito, mas hoje sempre que acontece algo ruim, me pego pensando que somente iria precisar de um abraço ou carinho da minha mulher, antes somente pensava eu querer ficar sozinho, e hoje é você que eu quero que esteja do meu lado." },
        { title: "Valentina",                                           artist: "Bella e Olmo",        cover: "assets/img/kuromi-hello.png",   audio: "assets/audio/03-valentina.mp3",         dedication: "Meu amor, quando ouço essa música falando de não querer sair e só ficar abraçado, é exatamente com você que quero que isso aconteça. Pouco me importam as paranoias que a sua ansiedade cria, eu nunca vou me negar a te dar carinho. Quero que lembre sempre do que diz na letra: 'sempre vou estar aqui'. E pode ter certeza que vou tentar de tudo pra poder ser feliz ao seu lado, não importando o que aconteça, bem conversadinho a gente resolve. Te amo, minha delícia de mulher." },
        { title: "Your Lips Are My Cigarette",                          artist: "cursedcry",           cover: "assets/img/kuromi-happy.png",   audio: "assets/audio/04-your-lips.mp3",         dedication: "Eu sou completamente viciado em você e com certeza me viciaria nos seus beijos, e a cada dia só te desejo mais e mais. Você pode até se achar um monstro e pensar que não merece o meu amor, mas pode ter certeza que merece ele e muito mais, você merece cada momento ao meu lado, e não vou desistir de você tão facilmente. Você nunca vai me cansar com o seu jeito, e pode ter certeza que pra sempre serei seu homem, e somente seu." },
        { title: "Só Nós Dois",                                         artist: "Tim Bernardes",       cover: "assets/img/kuromi-sit.png",     audio: "assets/audio/05-so-nos-dois.mp3",       dedication: "Meu amor, essa música é exatamente o que eu sinto por você e o que eu quero pra nós. Quando a letra diz que 'ninguém sonharia alguém como você', é a mais pura verdade. A realidade do seu lado é muito melhor do que qualquer coisa que eu já tenha sonhado.\n\nEu quero exatamente isso que ele canta: ser o seu parceiro pra vida inteira, ter o nosso ninho, dar nossas risadas nas madrugadas e dormir com seus beijos e abraços. Você não tem noção do quanto eu desejo isso para nós." },
        { title: "Um Amor Puro",                                        artist: "Djavan",              cover: "assets/img/kuromi-flower.png",  audio: "assets/audio/06-um-amor-puro.mp3",      dedication: "Todo o amor e todo o tempo que eu tiver nessa vida, eu quero entregar pra você. Eu realmente não preciso comentar muito sobre essa música, ela sozinha já fala o que desejo com você:\n\n\"O que há dentro do meu coração\nEu tenho guardado pra te dar\nE todas as horas que o tempo tem pra me conceder\nSão tuas, até morrer\n\nE a tua história, eu não sei\nMas me diga só o que for bom\nUm amor tão puro que ainda nem sabe a força que tem\nÉ teu e de mais ninguém\n\nTe adoro em tudo, tudo, tudo\nQuero mais que tudo, tudo, tudo\nTe amar sem limites, viver uma grande história\"" },
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
        document.getElementById('smodal-ded-text').innerHTML =
            (song.dedication || 'em breve... 💜').replace(/\n/g, '<br>');
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
