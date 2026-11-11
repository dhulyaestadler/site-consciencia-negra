// ==========================================
// 1. DADOS DO PERFIL (CUSTOMIZÁVEL)
// ==========================================
const PROFILE_DATA = {
    username: "@brasilorigens",
    displayName: "Afro-originários",
    bio: "Espalhando nossa riqueza pelo mundo! ✊🏽✊🏾✊🏿",
    avatarUrl: "https://educasc.com.br/wp-content/uploads/2021/11/iStock-936334648-scaled.webp",
    followers: "12.8k",
    following: "482",
    link: "https://meuportfolio.com"
};

// ==========================================
// 2. DADOS DOS 20 POSTS (CUSTOMIZÁVEL)
// ==========================================
const POSTS_DATA = [
    {
        id: 1,
        imageUrl: "https://primeirosnegros.com/wp-content/uploads/2021/09/machado_de_assis_real.jpg",
        caption: "Joaquim Maria Machado de Assis (1839-1908) foi um dos maiores escritores brasileiros da história, conhecido mundialmente por suas obras “Memórias Póstumas de Brás Cubas” (1881), “O Alienista” (1882), “Dom Casmurro” (1899) e tantas outras. Machado também participou sendo o primeiro presidente da Academia Brasileira de Letras (ABL), no ano de 1897. Marcou o início do movimento literário “Realismo” ( 1881) com seu romance “Memórias Póstumas de Brás Cubas” que se origina com o protagonista morto.",
        likes: 342,
        commentsCount: 28,
        location: "Rio de Janeiro, Brasil",
        date: "HÁ 1 DIA"
    },
    {
        id: 2,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-z0gUXatfVILbwRkSb3WGg6tRDsMEE6jjJh8Wt5xIJg&s=10",
        caption: "Carolina Maria de Jesus (1914-1977) foi catadora de papel, escritora, cantora, compositora e poeta brasileira, uma das primeiras escritoras negras do país. Sua obra mais famosa, “Quarto de Despejo”, além de contar sua dura história, dá voz ao povo periférico que é marginalizado, mostrando a cada página como é trabalhar muito, mas mesmo assim não conseguir o suficiente para comer.",
        likes: 890,
        commentsCount: 64,
        location: "Minas Gerais, Brasil",
        date: "HÁ 2 DIAS"
    },
    {
        id: 3,
        imageUrl: "https://cdn.agenciamural.org.br/2026/03/25162418/558697307_24166737849671655_749572829875173931_n.jpg",
        caption: "Itamar Vieira Junior (1979) é um escritor e geógrafo brasileiro. Possui como obra principal o romance Torto Arado que narra a história de duas mulheres negras no interior de Água Negra. Com esta obra, o escritor ressalta a cultura negra e a luta do povo negro após o “fim” da escravidão no Brasil.",
        likes: 215,
        commentsCount: 12,
        location: "Bahia, Brasil",
        date: "HÁ 3 DIAS"
    },
    {
        id: 4,
        imageUrl: "https://www.editoradobrasil.com.br/wp-content/uploads/2020/04/Eliane-Potiguara-Cr%C3%A9dito-Juliana-Lubini.jpg",
        caption: "Eliane Lima dos Santos (1950), mais conhecida como Eliane Potiguara é uma escritora, professora, ativista e empreendedora brasileira. Conhecida por sua obra “Metade Cara, Metade Máscara”, narra por meio de crônicas, poesia e relatos autobiográficos a violência sofrida pelos povos originários, a identidade e a perspectiva vivida por uma mulher indígena.",
        likes: 512,
        commentsCount: 45,
        location: "Rio de Janeiro, Brasil",
        date: "HÁ 5 DIAS"
    },
    {
        id: 5,
        imageUrl: "https://primeirosnegros.com/wp-content/uploads/2013/08/Milton-Santos-Revista-Caliban-787x1024.jpg",
        caption: "Milton Santos nasceu em 3 de maio de 1926, na Bahia. Foi um importante geógrafo, professor e escritor brasileiro. Ficou conhecido por seus estudos sobre as cidades, a pobreza e a globalização. Em 1994, recebeu o Prêmio Vautrin Lud, um dos mais importantes da Geografia mundial. Faleceu em 2001, deixando grandes contribuições para a educação e a sociedade.",
        likes: 430,
        commentsCount: 19,
        location: "Bahia, Brasil",
        date: "HÁ 1 SEMANA"
    },
    {
        id: 6,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPgpPxXrtFrn8oBPqapmz4ofV4_rUkObMK4yKPHDfDfAVIicQFjUQX2w&s=10",
        caption: "Sônia Guimarães nasceu em São Paulo e é uma importante física brasileira. Em 1989, tornou-se a primeira mulher negra brasileira a conquistar o doutorado em Física. Também foi a primeira professora negra do Instituto Tecnológico de Aeronáutica (ITA). Sua trajetória é marcada pela luta contra o racismo e pela presença das mulheres na ciência.",
        likes: 620,
        commentsCount: 33,
        location: "São Paulo, Brasil",
        date: "HÁ 1 SEMANA"
    },
    {
        id: 7,
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw8GWPgiFKYXfvG2iSoI7vLQxElJMacWKpLecZDGnDQLcLVZIWHlFxuAf4PMgrFyPBhyphenhyphenj0Y4mUNp2Rg9FKDetZVBsHaoFMZvBDFnYbQw5S6V5Uh-l54ikWH4w5iNpizB2q6WQ63dlTbieb/s1600/Francisco+Apurin%25C3%25A3.jpg",
        caption: "Francisco Apurinã, também conhecido como Ywmuniry, é uma liderança indígena do povo Apurinã, do Amazonas. É pesquisador, antropólogo e defensor dos direitos dos povos indígenas. Dedica seu trabalho à preservação da cultura, dos conhecimentos tradicionais e das terras indígenas, além de atuar em projetos voltados às comunidades originárias.",
        likes: 740,
        commentsCount: 52,
        location: "Amazonas, Brasil",
        date: "HÁ 2 SEMANAS"
    },
    {
        id: 8,
        imageUrl: "https://psol50.org.br/wp-content/uploads/2025/02/img20250219203727362.jpg",
        caption: "Célia Xakriabá é uma professora, ativista e política indígena do povo Xakriabá, de Minas Gerais. Ficou conhecida por defender os direitos dos povos indígenas, a preservação da natureza e a educação. Em 2022, foi eleita deputada federal por Minas Gerais, tornando-se uma importante representante indígena na política brasileira.",
        likes: 310,
        commentsCount: 14,
        location: "Minas Gerais, Brasil",
        date: "HÁ 2 SEMANAS"
    },
    {
        id: 9,
        imageUrl: "https://cdn.atribunarj.com.br/images/2025/12/04/reinaldo-04-12-2025-11-36-42-p9j3r.webp",
        caption: "José Reinaldo de Lima, o Reinaldo, é considerado o maior ídolo e artilheiro da história do Clube Atlético Mineiro. Nascido em 1957, o ex-atacante marcou época no futebol brasileiro na década de 1970 e 1980 por sua genialidade técnica e por seu forte posicionamento político.",
        likes: 198,
        commentsCount: 8,
        location: "Minas Gerais, Brasil",
        date: "HÁ 3 SEMANAS"
    },
    {
        id: 10,
        imageUrl: "https://iclnoticias.com.br/app/uploads/2024/04/Irenice-Rodrigues-2.jpg",
        caption: "Irenice Rodrigues foi uma das maiores corredoras brasileiras de meio-fundo (400m e 800m), recordista sul-americana na década de 1960. Mulher negra, de origem pobre e defensora dos direitos dos atletas, ela uniu o alto desempenho esportivo a um forte ativismo político e combate ao racismo, batendo de frente com os dirigentes esportivos da época.",
        likes: 1050,
        commentsCount: 95,
        location: "Minas Gerais, Brasil",
        date: "HÁ 3 SEMANAS"
    },
    {
        id: 11,
        imageUrl: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/07/garrincha-1962-fifa-e1783281962210.webp?w=419&h=283&crop=0&quality=90",
        caption: "Garrincha, nascido em 29 de outubro de 1933, foi o maior driblador da história do futebol e o grande símbolo da irreverência brasileira. Ele superou deformidades físicas congênitas para virar um gênio da ponta-direita e a 'Alegria do Povo'. O craque virou o maior ídolo do Botafogo e foi o herói absoluto do bicampeonato mundial do Brasil na Copa de 1962 após a lesão de Pelé. Ao lado do Rei, aliás, ele manteve a marca de nunca perder uma partida pela Seleção Brasileira. Ele faleceu de forma precoce aos 49 anos de idade, vítima de complicações causadas pelo alcoolismo severo. Algo que muitos fãs de futebol não sabem, é que ele possuía ascendência indígena: seu pai era fulni-ô.",
        likes: 845,
        commentsCount: 60,
        location: "Rio de Janeiro, Brasil",
        date: "HÁ 1 MÊS"
    },
    {
        id: 12,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DepYY2H7lKxZsn-raJ_zQrmed-lNOMW6xYm3osPzOOP_3W1x_oOkgH4d&s=10",
        caption: "Graziela Santos (Yaci), nascida em 1996, é uma arqueira brasileira da etnia Karapanã e a primeira atleta indígena a integrar a Seleção Brasileira de Tiro com Arco. Ela foi descoberta em 2013 em um projeto social no Amazonas e se tornou um dos grandes nomes da modalidade no país. A esportista acumula marcas expressivas no circuito mundial e conquistou duas medalhas de ouro no Grand Prix das Américas de 2024. Atualmente, ela treina intensamente na base da seleção com o objetivo de disputar os Jogos Olímpicos. Ela serve como uma grande referência de representatividade e orgulho para os povos originários.",
        likes: 420,
        commentsCount: 22,
        location: "Amazonas, Brasil",
        date: "HÁ 1 MÊS"
    },
    {
        id: 13,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgJK66yLG5a41J0MSQm0cKTuzkWujHOt6zZl7jCAbhA&s=10",
        caption: "Zumbi dos Palmares foi um dos principais líderes da resistência negra contra a escravidão no Brasil. Liderou o Quilombo dos Palmares, uma comunidade formada principalmente por pessoas negras que fugiam da escravidão em busca de liberdade. Lutou durante muitos anos contra os ataques dos portugueses para proteger seu povo e sua comunidade. Foi morto em 20 de novembro de 1695 e se tornou um símbolo de resistência, coragem e luta pela liberdade.",
        likes: 670,
        commentsCount: 38,
        location: "Alagoas, Brasil",
        date: "HÁ 1 MÊS"
    },
    {
        id: 14,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADrvCCdghPlxxF3xxW8qT9zkCBqQwEne0OVbteRqg_AmRuf4udBt8OVTA&s=10",
        caption: "Erika Hilton (nascida em Franco da Rocha, SP, em 1992) é uma pedagoga, ativista e política brasileira, reconhecida pela defesa dos direitos humanos, das mulheres, da população negra e da comunidade LGBTQIA+. Após atuar como co-deputada estadual na Alesp (2019–2020), tornou-se a primeira mulher trans eleita para a Câmara Municipal de São Paulo em 2020 e, em 2022, uma das primeiras a chegar à Câmara dos Deputados, sendo reeleita em 2026 com cerca de 1,5 milhão de votos. No Congresso Nacional, preside a Comissão de Defesa dos Direitos da Mulher e ganhou destaque como autora da PEC 8/2025, que propõe o fim da escala de trabalho 6x1.",
        likes: 290,
        commentsCount: 17,
        location: "São Paulo, Brasil",
        date: "HÁ 2 MESES"
    },
    {
        id: 15,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKIUhMRPxN0W1ckB5JC2RpekVxyDa1Mg6Bgiu22pm_g&s=10",
        caption: "Ailton Krenak é um dos maiores líderes indígenas, ambientalistas, filósofos e escritores do Brasil, pertencente à etnia Krenak. Ele alcançou um marco histórico ao se tornar o primeiro indígena eleito para a Academia Brasileira de Letras (ABL), onde tomou posse em abril de 2024 na cadeira nº 5. Nascido em 1953 em Minas Gerais, sua trajetória é marcada pela defesa incansável dos direitos dos povos originários e por uma crítica profunda ao modelo de progresso ocidental.  Protagonizou um dos momentos mais marcantes da história política brasileira ao pintar o rosto com a tinta preta do jenipapo no Congresso Nacional, protestando contra o retrocesso nos direitos indígenas durante a Assembleia Constituinte.",
        likes: 910,
        commentsCount: 71,
        location: "Minas Gerais, Brasil",
        date: "HÁ 2 MESES"
    },
    {
        id: 16,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNTFQYJDUqoILgIPYytvW1n-nSWNqFUlsImNvsAzyar4N0BQXz6EqIl7B&s=10",
        caption: "Txai Suruí é uma ativista indígena brasileira do povo Paiter Suruí, de Rondônia. Desde jovem, participa da luta pela proteção da floresta e dos direitos indígenas. Ficou conhecida internacionalmente em 2021, quando discursou na COP26, na Escócia, denunciando a destruição da Amazônia e as mudanças climáticas. Seu trabalho busca conscientizar as pessoas sobre a importância de preservar a natureza e respeitar os povos indígenas.",
        likes: 540,
        commentsCount: 31,
        location: "Rondônia, Brasil",
        date: "HÁ 2 MESES"
    },
    {
        id: 17,
        imageUrl: "https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2022/10/00ea7b7-milton-nascimento.jpg",
        caption: "Milton Nascimento, carinhosamente conhecido como Bituca, é um dos maiores cantores, compositores e multi-instrumentistas da história da música brasileira. Nascido no Rio de Janeiro em 26 de outubro de 1942 e criado em Três Pontas (Minas Gerais), tornou-se mundialmente aclamado pela extensão única de sua voz e por liderar o movimento Clube da Esquina. DUrante a carreira já venceu o prêmio Grammy cinco vezes",
        likes: 380,
        commentsCount: 20,
        location: "Rio de Janeiro, Brasil",
        date: "HÁ 3 MESES"
    },
    {
        id: 18,
        imageUrl: "https://imagens.tasendo.com.br/artistas/173/alcione-large-b8e76e20.jpg",
        caption: "Alcione Dias Nazareth, amplamente conhecida como Marrom, é uma das maiores cantoras, compositoras e multi-instrumentistas da música brasileira. Nascida em São Luís, no Maranhão, em 21 de novembro de 1947, ela ganhou os títulos de 'Dama do Samba' e 'A Voz do Samba' ao longo de mais de cinco décadas de carreira.",
        likes: 1120,
        commentsCount: 104,
        location: "Maranhão, Brasil",
        date: "HÁ 3 MESES"
    },
    {
        id: 19,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18P93Hv5cjGQL6EAeJx9YtCK4mdG_ei_ctnzg0tvYul_mkpbyd5gI0AFS&s=10",
        caption: "O Brô MC's é um grupo de rap indígena criado em 2009, em Dourados, Mato Grosso do Sul. Formado por jovens do povo Guarani Kaiowá, o grupo canta em português e guarani. Suas músicas falam sobre a cultura indígena, o preconceito e a luta pelos direitos dos povos originários.  Em 2022, tornaram-se os primeiros artistas indígenas a se apresentar no Rock in Rio a convite do rapper Xamã. Também passaram por grandes eventos como o The Town, o G20, o Prêmio Multishow e o Grammy Latino.",
        likes: 830,
        commentsCount: 49,
        location: "Mato Grosso do Sul, Brasil",
        date: "HÁ 4 MESES"
    },
    {
        id: 20,
        imageUrl: "https://s2-g1.glbimg.com/nF4Qh2fqd6oMppm2fKmqq1yBQQs=/0x0:1000x582/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/T/S/VL85YLT2ilnljDM2l9hA/djuena-tikuna-foto-diego-janata.jpg",
        caption: "Djuena Tikuna (Denizia Araújo Peres, nascida em 1984) é uma das principais cantoras, compositoras e ativistas da música indígena contemporânea no Brasil. Natural da Aldeia Umariaçu II, em Tabatinga (Amazonas), ela pertence ao povo Tikuna (autodenominado Magüta), a maior nação indígena da Amazônia brasileira. Todas as suas composições são interpretadas exclusivamente no idioma Tikuna, língua que ela falou de forma exclusiva até os 10 anos de idade.  Além da carreira musical, Djuena é a primeira jornalista indígena formada no estado do Amazonas e atua também como documentarista e produtora cultural.",
        likes: 760,
        commentsCount: 41,
        location: "Amazonas, Brasil",
        date: "HÁ 4 MESES"
    }
];

// ==========================================
// 3. INICIALIZAÇÃO DA INTERFACE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    loadProfile();
    renderGridPosts();
    renderFeedPosts();
    setupEventListeners();
});

function loadProfile() {
    document.getElementById("profile-username").textContent = PROFILE_DATA.username;
    document.getElementById("profile-display-name").textContent = PROFILE_DATA.displayName;
    document.getElementById("profile-bio-text").textContent = PROFILE_DATA.bio;
    document.getElementById("profile-avatar").src = PROFILE_DATA.avatarUrl;
    document.getElementById("sidebar-avatar").src = PROFILE_DATA.avatarUrl;
    document.getElementById("stat-posts").textContent = POSTS_DATA.length;
    document.getElementById("stat-followers").textContent = PROFILE_DATA.followers;
    document.getElementById("stat-following").textContent = PROFILE_DATA.following;
    
    const linkElem = document.getElementById("profile-link");
    linkElem.href = PROFILE_DATA.link;
    linkElem.innerHTML = `<i class="fa-solid fa-link"></i> ${PROFILE_DATA.link.replace("https://", "")}`;
}

// Renderiza a Grade de Quadrados
function renderGridPosts() {
    const gridContainer = document.getElementById("posts-grid-container");
    gridContainer.innerHTML = "";

    POSTS_DATA.forEach(post => {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.innerHTML = `
            <img src="${post.imageUrl}" alt="Post ${post.id}">
            <div class="grid-overlay">
                <span><i class="fa-solid fa-heart"></i> ${post.likes}</span>
                <span><i class="fa-solid fa-comment"></i> ${post.commentsCount}</span>
            </div>
        `;
        item.addEventListener("click", () => openModal(post));
        gridContainer.appendChild(item);
    });
}

// Renderiza o Feed Corrido em Lista
function renderFeedPosts() {
    const feedContainer = document.getElementById("posts-feed-container");
    feedContainer.innerHTML = "";

    POSTS_DATA.forEach(post => {
        const card = document.createElement("div");
        card.className = "feed-card";
        card.innerHTML = `
            <div class="feed-header">
                <img src="${PROFILE_DATA.avatarUrl}" alt="${PROFILE_DATA.username}">
                <div class="feed-user-info">
                    <span class="username-bold">${PROFILE_DATA.username}</span>
                    <span class="location-text">${post.location}</span>
                </div>
            </div>
            <div class="feed-img-container">
                <img src="${post.imageUrl}" alt="Post Image">
            </div>
            <div class="feed-actions">
                <button class="action-btn like-btn" onclick="toggleLike(this)"><i class="fa-regular fa-heart"></i></button>
                <button class="action-btn"><i class="fa-regular fa-comment"></i></button>
                <button class="action-btn"><i class="fa-regular fa-paper-plane"></i></button>
            </div>
            <div class="feed-likes"><strong>${post.likes}</strong> curtidas</div>
            <div class="feed-caption">
                <span class="username-bold">${PROFILE_DATA.username}</span> ${post.caption}
            </div>
            <div class="feed-date">${post.date}</div>
        `;
        feedContainer.appendChild(card);
    });
}

// Alternar Curtida
function toggleLike(btn) {
    const icon = btn.querySelector("i");
    if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        btn.classList.add("liked");
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        btn.classList.remove("liked");
    }
}

// ==========================================
// 4. MODAL E CONTROLES DE INTERFACE
// ==========================================
function openModal(post) {
    document.getElementById("modal-img").src = post.imageUrl;
    document.getElementById("modal-avatar").src = PROFILE_DATA.avatarUrl;
    document.getElementById("modal-username").textContent = PROFILE_DATA.username;
    document.getElementById("modal-location").textContent = post.location;
    document.getElementById("modal-caption-username").textContent = PROFILE_DATA.username;
    document.getElementById("modal-caption-text").textContent = post.caption;
    document.getElementById("modal-likes-count").textContent = post.likes;
    document.getElementById("modal-date").textContent = post.date;

    document.getElementById("post-modal").classList.remove("hidden");
}

function setupEventListeners() {
    // Alternar Tema Escuro
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.body.removeAttribute("data-theme");
            themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i> <span>Modo Escuro</span>`;
        } else {
            document.body.setAttribute("data-theme", "dark");
            themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i> <span>Modo Claro</span>`;
        }
    });

    // Alternar Modos de Visualização (Grade / Feed Corrido)
    const viewGridBtn = document.getElementById("view-grid");
    const viewFeedBtn = document.getElementById("view-feed");
    const gridContainer = document.getElementById("posts-grid-container");
    const feedContainer = document.getElementById("posts-feed-container");

    viewGridBtn.addEventListener("click", () => {
        viewGridBtn.classList.add("active");
        viewFeedBtn.classList.remove("active");
        gridContainer.classList.remove("hidden");
        feedContainer.classList.add("hidden");
    });

    viewFeedBtn.addEventListener("click", () => {
        viewFeedBtn.classList.add("active");
        viewGridBtn.classList.remove("active");
        feedContainer.classList.remove("hidden");
        gridContainer.classList.add("hidden");
    });

    // Fechar Modal
    const modal = document.getElementById("post-modal");
    const closeBtn = document.querySelector(".modal-close");
    const overlay = document.querySelector(".modal-overlay");

    const closeModal = () => modal.classList.add("hidden");
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
}
