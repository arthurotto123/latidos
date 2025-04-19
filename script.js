$(document).ready(function () {
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');

    });
    
});


const navLists = document.querySelectorAll('#nav_list li, #mobile_nav_list li');

navLists.forEach(item => {
    item.addEventListener('click', () => {
     
        navLists.forEach(navItem => navItem.classList.remove('active'));

        item.classList.add('active');
    });
});


// Função para ativar a animação quando o elemento estiver visível
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.img-sobrenos, #cta, #cta_buttons, .social-midia-buttons');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% do elemento estiver visível

    elementsToAnimate.forEach(element => {
        element.style.animationPlayState = 'paused'; // Pausa a animação inicialmente
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const verMaisDiv = document.querySelector('.vermais');
    const verMaisBtn = document.getElementById('ver-mais-btn');
    const verMenosBtn = document.getElementById('ver-menos-btn');

    // Botão "Ver mais"
    verMaisBtn.addEventListener('click', () => {
        verMaisDiv.style.display = 'flex'; // Exibe a seção .vermais
        verMaisBtn.style.display = 'none'; // Oculta o botão "Ver mais"
        verMenosBtn.style.display = 'block'; // Exibe o botão "Ver menos"
    });

    // Botão "Ver menos"
    verMenosBtn.addEventListener('click', () => {
        verMaisDiv.style.display = 'none'; // Oculta a seção .vermais
        verMaisBtn.style.display = 'block'; // Exibe o botão "Ver mais"
        verMenosBtn.style.display = 'none'; // Oculta o botão "Ver menos"
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const verMaisDiv1 = document.querySelector('.vermais1');
    const verMaisBtn1 = document.getElementById('ver-mais-btn1');
    const verMenosBtn1 = document.getElementById('ver-menos-btn1');

    // Botão "Ver mais"
    verMaisBtn1.addEventListener('click', () => {
        verMaisDiv1.style.display = 'flex'; // Exibe a seção .vermais
        verMaisBtn1.style.display = 'none'; // Oculta o botão "Ver mais"
        verMenosBtn1.style.display = 'block'; // Exibe o botão "Ver menos"
    });

    // Botão "Ver menos"
    verMenosBtn1.addEventListener('click', () => {
        verMaisDiv1.style.display = 'none'; // Oculta a seção .vermais
        verMaisBtn1.style.display = 'block'; // Exibe o botão "Ver mais"
        verMenosBtn1.style.display = 'none'; // Oculta o botão "Ver menos"
    });
});