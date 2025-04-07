const projects = [
    {
        title: "Gestion Active Directory",
        date: "Septembre 2023",
        image: "https://www.minitool.com/images/uploads/lib/2020/04/active-directory/active-directory-1.jpg",
        category: "securité",
        environment: "Windows Server",
        description: "Apprentissage en autodidacte via OpenClassrooms et TryHackMe et mise en place des stratégies de mot de passe ainsi que des politiques de sécurité",
        icon: "shield"
    },
    {
        title: "Gestion des Ressources IT",
        date: "Octobre 2023",
        image: "https://tse3.mm.bing.net/th/id/OIP.bJzyOOyWL9Er0ib9aXufxwHaFA?rs=1&pid=ImgDetMain",
        category: "gestion",
        environment: "EXCEL/Packet Tracer",
        description: "Identification et documentation des ressources numériques pour une meilleure gestion et sécurisation du parc informatique",
        icon: "folder"
    },
    {
        title: "Mise en Place d'un Outil de Gestion de Projet",
        date: "Novembre 2023",
        image: "https://www.kpulse.fr/public/images/gestion_projet_plannification_taches.jpg",
        category: "gestion",
        environment: "Trello",
        description: "Mise en place d'un dashboard permettant la gestion de Projet",
        icon: "list"
    },
  
    {
        title: "Mise en Place d'un Outil de Ticketing",
        date: "Decembre 2023",
        image: "https://www.itarian.com/images/ticketing-system.png",
        category: "ticket",
        environment: "Trello",
        description: "Mise en place d'un système automatisé permettant de récupérer les tickets des utilisateurs et de les afficher sur un dashboard centralisé.",
        icon: "ticket"
    },
    {
        title: "Suivi de Températures en Temps Réel",
        date: "Janvier 2024",
        image: "https://tse3.mm.bing.net/th/id/OIP.lpy2N8JWm7lxlmIa12td9gHaEH?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "script",
        environment: "PowerShell",
        description: "Déploiement de capteurs de température dont les données sont collectées et affichées en temps réel sur des écrans",
        icon: "terminal"
    },
    {
        title: "Campagne de Phishing",
        date: "Fevrier 2024",
        image: "https://www.allbusiness.com/asset/2018/10/Phishing-scam.jpg",
        category: "securité",
        environment: "Gophish",
        description: "Mise en place d'une campagne de phishing simulée pour tester la réactivité des utilisateurs face à une menace",
        icon: "shield"
    },
    {
        title: "Creation d'un Site Vitrine",
        date: "2024",
        image: "https://png.pngtree.com/png-vector/20190611/ourlarge/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg",
        category: "developpement",
        environment: "HTML/CSS",
        description: " Création d’un site vitrine pour présenter les services à la personne, petits travaux et dépannages de niveau 1 proposés par l’entreprise ERP.",
        icon: "code"
    },
    {
        title: "Récupération de Données Industrielles",
        date: "Octobre 2024",
        image: "https://tse3.mm.bing.net/th/id/OIP.lpy2N8JWm7lxlmIa12td9gHaEH?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "script",
        environment: "AutoIt Script",
        description: "Création de scripts AutoIt pour automatiser la récupération des données de production et des pannes dans un environnement industriel.",
        icon: "terminal"
    },
    {
        title: "Inventaire et Gestion des Ressources Informatiques",
        date: "Decembre 2024",
        image: "https://tse3.mm.bing.net/th/id/OIP.bJzyOOyWL9Er0ib9aXufxwHaFA?rs=1&pid=ImgDetMains",
        category: "gestion",
        environment: "Excel",
        description: "Recensement des ressources numériques, incluant la présence des applications, des sauvegardes et des connexions réseau",
        icon: "folder"
    },
    {
        title: "Projet MarieTeam",
        date: "2024-2025",
        image: "https://tse3.mm.bing.net/th/id/OIP.ufRWG06Auf6gqpZ0xYCGzwHaEK?rs=1&pid=ImgDetMain",
        category: "developpement",
        environment: "React, Node.js, Express",
        description: "Réalisation de maquettes suivi du développement de son site internet de gestion de Transport Maritime",
        icon: "code"
    },
    {
        title: "Gestion des Tickets avec GLPI",
        date: "2025",
        image: "https://www.itarian.com/images/ticketing-system.png",
        category: "ticket",
        environment: "GLPI",
        description: "Mise en place de GLPI pour la gestion des tickets",
        icon: "ticket"
    },
    {
        title: "Mise en place de QR Codes",
        date: "Mars 2024",
        image: "https://static.vecteezy.com/system/resources/previews/015/873/570/original/qr-code-scan-illustration-in-flat-style-mobile-phone-scanning-illustration-on-isolated-background-barcode-reader-in-hand-sign-business-concept-vector.jpg",
        category: "Gestion",
        environment: "QR codes",
        description: "Création de QR codes pour les équipes de maintenance, permettant un accès instantané à la documentation technique et facilitant ainsi la résolution rapide des pannes.",
        icon: "folder"
    }
];

function createProjectCard(project) {
    return `
        <article class="project-card" data-category="${project.category}">
            <div class="project-header">
                <div class="header-content">
                    <div class="header-left">
                        <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            ${getIconPath(project.icon)}
                        </svg>
                        <h2 class="project-title">${project.title}</h2>
                    </div>
                    <span class="project-date">${project.date}</span>
                </div>
            </div>
            <div class="image-container">
                <img class="project-image" src="${project.image}" alt="${project.title}">
                <span class="category-badge">${capitalizeFirstLetter(project.category)}</span>
            </div>
            <div class="project-content">
                <div class="environment">Environnement : ${project.environment}</div>
                <p class="project-description">${project.description}</p>
            </div>
        </article>
    `;
}

function getIconPath(icon) {
    const icons = {
        shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
        folder: '<path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/><circle cx="14" cy="15" r="1"/>',
        list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
        code: '<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m5 12-3 3 3 3"/><path d="m9 18 3-3-3-3"/>',
        terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9 12 2 2 4-4"/>'
    };
    return icons[icon] || icons.list;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.category);
        });
    });
});