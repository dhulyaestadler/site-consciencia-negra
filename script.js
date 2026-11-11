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
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        caption: "Arquitetura moderna e linhas perfeitas 🏛️",
        likes: 198,
        commentsCount: 8,
        location: "Brasília, Brasil",
        date: "HÁ 3 SEMANAS"
    },
    {
        id: 10,
        imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        caption: "Pôr do sol grego 🌅 Um dos visuais mais marcantes que já vi.",
        likes: 1050,
        commentsCount: 95,
        location: "Santorini, Grécia",
        date: "HÁ 3 SEMANAS"
    },
    {
        id: 11,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        caption: "Setup de trabalho atualizado! Pronto para novos projetos 💻⚡",
        likes: 845,
        commentsCount: 60,
        location: "Home Office",
        date: "HÁ 1 MÊS"
    },
    {
        id: 12,
        imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        caption: "A névoa matinal cobrindo o vale 🌫️",
        likes: 420,
        commentsCount: 22,
        location: "Gramado, Brasil",
        date: "HÁ 1 MÊS"
    },
    {
        id: 13,
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        caption: "Reflexos perfeitos no lago 🏞️ A calma que a natureza traz.",
        likes: 670,
        commentsCount: 38,
        location: "Patagônia",
        date: "HÁ 1 MÊS"
    },
    {
        id: 14,
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        caption: "Música, boa companhia e energia positiva 🎶🎸",
        likes: 290,
        commentsCount: 17,
        location: "Estúdio de Som",
        date: "HÁ 2 MÊSES"
    },
    {
        id: 15,
        imageUrl: "https://images.unsplash.com/photo-1476514525535-ce74f45814d0?auto=format&fit=crop&w=800&q=80",
        caption: "Passeio de barco pelas águas cristalinas ⛵",
        likes: 910,
        commentsCount: 71,
        location: "Arraial do Cabo, Brasil",
        date: "HÁ 2 MÊSES"
    },
    {
        id: 16,
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        caption: "Aventura no deserto. Vastidão sem fim 🏜️",
        likes: 540,
        commentsCount: 31,
        location: "Atacama, Chile",
        date: "HÁ 2 MÊSES"
    },
    {
        id: 17,
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
        caption: "Raios de sol atravessando as árvores ☀️🌿",
        likes: 380,
        commentsCount: 20,
        location: "Jardim Botânico",
        date: "HÁ 3 MÊSES"
    },
    {
        id: 18,
        imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        caption: "Celebrando conquistas e novos ciclos! 🎉✨",
        likes: 1120,
        commentsCount: 104,
        location: "Festa de Fim de Ano",
        date: "HÁ 3 MÊSES"
    },
    {
        id: 19,
        imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
        caption: "Meu parceiro de todas as horas 🐱💤",
        likes: 830,
        commentsCount: 49,
        location: "Em casa",
        date: "HÁ 4 MÊSES"
    },
    {
        id: 20,
        imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
        caption: "A força e a beleza da cachoeira 🌊🌿",
        likes: 760,
        commentsCount: 41,
        location: "Foz do Iguaçu, Brasil",
        date: "HÁ 4 MÊSES"
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
