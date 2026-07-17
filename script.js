// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos do menu mobile
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Função para alternar o menu
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        
        // Atualiza a acessibilidade (aria-expanded)
        const isExpanded = navMenu.classList.contains('active');
        mobileBtn.setAttribute('aria-expanded', isExpanded);
        
        // Troca o ícone (hambúrguer para X)
        const icon = mobileBtn.querySelector('i');
        if (isExpanded) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    };

    // Event listener para o botão mobile
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }

    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Melhora a navegação por teclado: fecha o menu se o foco sair dele
    document.addEventListener('focusin', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            toggleMenu();
        }
    });
});