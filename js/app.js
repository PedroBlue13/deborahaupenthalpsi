
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o comportamento padrão

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector(".header").offsetHeight; // Obtém a altura do header fixo
            const targetPosition = targetElement.offsetTop - headerHeight - 120; // Ajuste fino

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth" // Faz um scroll suave
            });
        }
    });
});

function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate3d(0, 0, 0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Iniciar animações quando a página carrega
document.addEventListener('DOMContentLoaded', animateOnScroll);


function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992) { // Apenas no mobile
                navbarCollapse.classList.remove("show"); // Fecha o menu
            }
        });
    });
});

function initializeGoogleAnalytics(trackingID) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', trackingID);
    };
  }
  
  initializeGoogleAnalytics('G-0');
  
