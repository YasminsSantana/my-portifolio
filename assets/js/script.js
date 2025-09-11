const translations = {
    en: {
        nav_home: "Home",
        nav_whoami: "About me",
        nav_illustrations: "Illustrations",
        nav_designs: "Designs",
        hero_title: "Welcome to my portfolio",
        hero_subtitle: "A creative designer passionate about crafting meaningful projects.",
        hero_button: "View My Work",
        whoami_title: "Who Am I?",
        about_me_heading: "About Me",
        about_me_p1: "Hello! I am a designer and illustrator passionate about creating vibrant and engaging projects. My work is heavily inspired by cute aesthetics and functional design. I believe that good design should not only be beautiful but also solve problems and carry meaning.",
        about_me_p2: "When I'm not designing, you can find me sketching, exploring new coffee shops, or playing with my dog. Feel free to check out my work and get in touch!",
        illustrations_title: "Illustrations Gallery",
        designs_title: "Designs Gallery",
        project1_title: "Project Title 1",
        project1_desc: "A short description of this amazing illustration project.",
        project2_title: "Project Title 2",
        project2_desc: "A short description of this amazing illustration project.",
        design_project1_title: "Design Project 1",
        design_project1_desc: "A short description of this clean and modern design project.",
        design_project2_title: "Design Project 2",
        design_project2_desc: "A short description of this clean and modern design project.",
        footer_contact: "Contact me at ",
        footer_text: "© 2025 Yasmin Santana. All Rights Reserved.",
    },
    es: {
        nav_home: "Inicio",
        nav_whoami: "Sobre mí",
        nav_illustrations: "Ilustraciones",
        nav_designs: "Diseños",
        hero_title: "Bienvenido a mi portafolio",
        hero_subtitle: "Una designer creativa apasionada por crear proyectos significativos.",
        hero_button: "Ver Mi Trabajo",
        whoami_title: "¿Quién Soy?",
        about_me_heading: "Sobre Mí",
        about_me_p1: "¡Hola! Soy una diseñadora e ilustradora apasionada por crear proyectos vibrantes y atractivos. Mi trabajo está fuertemente inspirado en la estética adorable (cute) y el diseño funcional. Creo que un buen diseño no solo debe ser bonito, sino también resolver problemas y tener un significado.",
        about_me_p2: "Cuando no estoy diseñando, puedes encontrarme dibujando, explorando nuevos cafés o jugando con mi perro. ¡No dudes en ver mi trabajo y ponerte en contacto!",
        illustrations_title: "Galería de Ilustraciones",
        designs_title: "Galería de Diseños",
        project1_title: "Título del Proyecto 1",
        project1_desc: "Una breve descripción de este increíble proyecto de ilustración.",
        project2_title: "Título del Proyecto 2",
        project2_desc: "Una breve descripción de este increíble proyecto de ilustración.",
        design_project1_title: "Proyecto de Diseño 1",
        design_project1_desc: "Una breve descripción de este proyecto de diseño limpio y moderno.",
        design_project2_title: "Proyecto de Diseño 2",
        design_project2_desc: "Una breve descripción de este proyecto de diseño limpio y moderno.",
        footer_contact: "Contáctame en ",
        footer_text: "© 2025 Yasmin Santana. Todos los Derechos Reservados.",
    },
    pt: {
        nav_home: "Início",
        nav_whoami: "Sobre mim",
        nav_illustrations: "Ilustrações",
        nav_designs: "Designs",
        hero_title: "Bem-vindo ao meu portfólio",
        hero_subtitle: "Uma designer criativa apaixonada por criar projetos com significado.",
        hero_button: "Veja Meu Trabalho",
        whoami_title: "Quem Sou Eu?",
        about_me_heading: "Sobre Mim",
        about_me_p1: "Olá! Sou uma designer e ilustradora apaixonada por criar projetos vibrantes e envolventes. Meu trabalho é fortemente inspirado pela estética fofa e pelo design funcional. Acredito que um bom design não deve apenas ser bonito, mas também resolver problemas e carregar um significado.",
        about_me_p2: "Quando não estou desenhando, você pode me encontrar esboçando, explorando novos cafés ou brincando com meu cachorro. Sinta-se à vontade para ver meu trabalho e entrar em contato!",
        illustrations_title: "Galeria de Ilustrações",
        designs_title: "Galeria de Designs",
        project1_title: "Título do Projeto 1",
        project1_desc: "Uma breve descrição deste incrível projeto de ilustração.",
        project2_title: "Título do Projeto 2",
        project2_desc: "Uma breve descrição deste incrível projeto de ilustração.",
        design_project1_title: "Projeto de Design 1",
        design_project1_desc: "Uma breve descrição deste projeto de design limpo e moderno.",
        design_project2_title: "Projeto de Design 2",
        design_project2_desc: "Uma breve descrição deste projeto de design limpo e moderno.",
        footer_contact: "Me contate em ",
        footer_text: "© 2025 Yasmin Santana. Todos os Direitos Reservados.",
    }
};

// Function to set the language
const setLanguage = (language) => {
    localStorage.setItem('language', language);
    translatePage();
};

// Function to translate the page content
const translatePage = () => {
    const language = localStorage.getItem('language') || 'pt'; // Default to English
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    document.documentElement.lang = language;
};

// Set language on initial page load
document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});