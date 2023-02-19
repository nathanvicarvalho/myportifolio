function creatCard(title, demonstration, description, technologies, repository, link){
    return`
    
    <article class="card">
        <h2 class="title">${title}</h2>
        <img src="./src/img/img-projetos/${demonstration}.png" alt="" class="demonstration_project">
        <p class="description_project">${description}</p>
        <p class="technologies_project">${technologies}</p>
        <a href="${repository}" target="_blank"><i class="fa-brands fa-github fa-xl icon_project"></i></a>
        <a href="${link}" target="_blank"><i class="fa-solid fa-link fa-xl"></i></a>
    </article>
    
    `
}

document.querySelector('#cards').innerHTML = 
    creatCard(
        'Cronometroz',
        'cronometroz',
        'Cronômetro Web Moderno.',
        'Html5 - Css3 - JavaScript',
        'https://github.com/nathanvicarvalho/Cronometroz',
        'https://nathanvicarvalho.github.io/Cronometroz/'
    )+
    creatCard(
        'Calculadora',
        'calculadora',
        'Calculadora simples moderna',
        'Html5 - Css3 - JavaScript - Bootstrap',
        'https://github.com/nathanvicarvalho/calculadora',
        'https://nathanvicarvalho.github.io/calculadora/'
    )+
    creatCard(
        'Dados Visitante',
        'dados-visitante',
        'Uma simples página onde coleta dados e é exposto nos campos correspondentes',
        'Html5 - JavaScript - Bootstrap',
        'https://github.com/nathanvicarvalho/DadosVisitante',
        'https://nathanvicarvalho.github.io/DadosVisitante/'
    )+
    creatCard(
        'Finans',
        'finans',
        'Finans - Contas descomplicadas - Somente visual',
        'Html5 - Bootstrap',
        'https://github.com/nathanvicarvalho/Finans',
        'https://nathanvicarvalho.github.io/Finans/'
    )+





    creatCard(
        'Em breve..',
        undefined,
        'Aprendizado constante! Em breve muitos outros projetos.',
        '...',
        'https://github.com/nathanvicarvalho',
        'https://github.com/nathanvicarvalho'

    );

function creatExperience(programmingLanguage, language, nameLanguage){
    return`
    
    <article class="cardTechnology">
        <i class="fa-brands fa-${programmingLanguage} icons icon_${language}"></i>
        <p class="name_technology">${nameLanguage}</p>
    </article>
    
    `
}

document.querySelector('#experienceCards').innerHTML = 
    creatExperience(
        'html5',
        'html',
        'HTML5'
    )+
    creatExperience(
        'css3',
        'css',    
        'CSS3'
    )+
    creatExperience(
        'js',
        'js',    
        'JAVASCRIPT'
    )+
    creatExperience(
        'bootstrap',
        'bootstrap',    
        'BOOTSTRAP'
    )+
    creatExperience(
        'php',
        'php',    
        'PHP'
    );
    
const bars = document.getElementById('navigationMenuMobile'); 
const navLink = document.getElementById('navLink');

function clickBarsMenu(){
    navLink.classList.toggle('show');
}

bars.addEventListener('click', clickBarsMenu);