/* ===================================================
   William Andrade - Construção & Reformas
   Professional Interactive JavaScript
   =================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    iniciarProjeto();
});

function iniciarProjeto(){

    cacheDom();

    buildServiceCards();

    iniciarAnimacoes();

    iniciarContadores();

}

(function () {
    'use strict';

    // ===================== DATA =====================
    var SERVICOS = [
        {
            id: 'fundacao',
            nome: 'Fundação e Terraplanagem',
            icone: 'fas fa-hard-hat',
            tipos: [
                { nome: 'Sapata Corrida', preco: 120, desc: 'Ideal para terrenos firmes e construções menores' },
                { nome: 'Sapata Isolada', preco: 140, desc: 'Para pilares individuais em solos estáveis' },
                { nome: 'Radier', preco: 160, desc: 'Laje no solo, boa para terrenos uniformes' },
                { nome: 'Estaca Broca', preco: 180, desc: 'Para solos moles, profundidade moderada' },
                { nome: 'Estaca Hélice', preco: 250, desc: 'Alta capacidade de carga, solos difíceis' },
                { nome: 'Baldrame', preco: 135, desc: 'Viga de fundação sobre sapatas, muito utilizado' }
            ]
        },
        {
            id: 'estrutura',
            nome: 'Estrutura e Laje',
            icone: 'fas fa-building',
            badge: 'Popular',
            tipos: [
                { nome: 'Concreto Armado', preco: 320, desc: 'Mais utilizado, alta resistência e durabilidade' },
                { nome: 'Estrutura Metálica', preco: 380, desc: 'Montagem rápida, vãos maiores, moderna' },
                { nome: 'Estrutura de Madeira', preco: 250, desc: 'Charme rústico, sustentável, versátil' },
                { nome: 'Pré-Moldada', preco: 290, desc: 'Rapidez na obra, custo-benefício excelente' },
                { nome: 'Laje Treliçada', preco: 270, desc: 'Leve e econômica, muito popular' },
                { nome: 'Laje Maciça', preco: 350, desc: 'Maior resistência, ideal para grandes vãos' }
            ]
        },
        {
            id: 'alvenaria',
            nome: 'Alvenaria',
            icone: 'fas fa-cubes',
            tipos: [
                { nome: 'Bloco Cerâmico', preco: 95, desc: 'Tradicional, bom isolamento térmico' },
                { nome: 'Bloco de Concreto', preco: 110, desc: 'Alta resistência, paredes estruturais' },
                { nome: 'Bloco Estrutural', preco: 130, desc: 'Dispensa pilares, economia na estrutura' },
                { nome: 'Drywall', preco: 85, desc: 'Paredes internas rápidas e limpas' },
                { nome: 'Steel Frame', preco: 180, desc: 'Construção a seco, rápida, moderna' },
                { nome: 'Tijolo Ecológico', preco: 120, desc: 'Sustentável, encaixe fácil, sem argamassa' }
            ]
        },
        {
            id: 'telhado',
            nome: 'Cobertura e Telhado',
            icone: 'fas fa-home',
            badge: 'Popular',
            tipos: [
                { nome: 'Telha Colonial (Cerâmica)', preco: 110, desc: 'Clássica brasileira, ótimo isolamento' },
                { nome: 'Telha Romana', preco: 105, desc: 'Encaixe firme, menos consumo por m²' },
                { nome: 'Telha Portuguesa', preco: 100, desc: 'Elegante, boa vedação contra chuva' },
                { nome: 'Telha de Concreto', preco: 120, desc: 'Durável, variedade de cores' },
                { nome: 'Fibrocimento', preco: 85, desc: 'Econômica, leve, fácil instalação' },
                { nome: 'Galvanizada (Zinco)', preco: 75, desc: 'Baixo custo, boa para grandes áreas' },
                { nome: 'Sanduíche Termoacústica', preco: 160, desc: 'Isolamento térmico e acústico superior' },
                { nome: 'Shingle (Americana)', preco: 180, desc: 'Visual sofisticado, importada, alta durabilidade' },
                { nome: 'Telha de PVC', preco: 95, desc: 'Leve, resistente, anti-chama' }
            ]
        },
        {
            id: 'eletrica',
            nome: 'Instalação Elétrica',
            icone: 'fas fa-bolt',
            tipos: [
                { nome: 'Embutida (Padrão)', preco: 95, desc: 'Fios dentro da parede, acabamento limpo' },
                { nome: 'Aparente com Eletroduto', preco: 65, desc: 'Visível mas organizada, fácil manutenção' },
                { nome: 'Aparente Industrial', preco: 75, desc: 'Estilo industrial, tendência em decoração' },
                { nome: 'Mista', preco: 85, desc: 'Combina embutida e aparente conforme necessidade' },
                { nome: 'Automação Residencial', preco: 150, desc: 'Controle por app, interruptores inteligentes' }
            ]
        },
        {
            id: 'hidraulica',
            nome: 'Instalação Hidráulica',
            icone: 'fas fa-faucet',
            tipos: [
                { nome: 'PVC Soldável', preco: 55, desc: 'Mais comum, econômico, água fria' },
                { nome: 'CPVC', preco: 70, desc: 'Água quente e fria, boa resistência' },
                { nome: 'PPR (Polipropileno)', preco: 85, desc: 'Fusão térmica, sem vazamentos, durável' },
                { nome: 'PEX Flexível', preco: 95, desc: 'Flexível, menos conexões, instalação rápida' },
                { nome: 'Cobre', preco: 130, desc: 'Premium, longevidade excepcional, antibacteriano' }
            ]
        },
        {
            id: 'piso',
            nome: 'Porcelanato e Piso',
            icone: 'fas fa-border-all',
            badge: 'Popular',
            tipos: [
                { nome: 'Porcelanato Polido', preco: 120, desc: 'Brilhante, sofisticado, ambientes internos' },
                { nome: 'Porcelanato Acetinado', preco: 110, desc: 'Suave ao toque, brilho moderado' },
                { nome: 'Porcelanato Rústico', preco: 105, desc: 'Antiderrapante, áreas externas e úmidas' },
                { nome: 'Porcelanato Madeira', preco: 115, desc: 'Visual de madeira, praticidade de porcelanato' },
                { nome: 'Cerâmica', preco: 75, desc: 'Econômica, grande variedade de modelos' },
                { nome: 'Piso Vinílico', preco: 85, desc: 'Confortável, silencioso, fácil instalação' },
                { nome: 'Piso Laminado', preco: 80, desc: 'Visual de madeira, instalação rápida' },
                { nome: 'Granito/Mármore', preco: 200, desc: 'Pedra natural, luxo e exclusividade' }
            ]
        },
        {
            id: 'pintura',
            nome: 'Reboco e Pintura',
            icone: 'fas fa-paint-roller',
            tipos: [
                { nome: 'Tinta Látex PVA', preco: 35, desc: 'Econômica, áreas internas, boa cobertura' },
                { nome: 'Tinta Acrílica Standard', preco: 45, desc: 'Lavável, interna e externa, versátil' },
                { nome: 'Tinta Acrílica Premium', preco: 60, desc: 'Alta cobertura, rendimento superior' },
                { nome: 'Tinta Epóxi', preco: 75, desc: 'Ultra resistente, banheiros, cozinhas' },
                { nome: 'Textura Projetada', preco: 55, desc: 'Efeito decorativo, disfarça imperfeições' },
                { nome: 'Grafiato', preco: 65, desc: 'Textura riscada, visual moderno' },
                { nome: 'Massa Corrida + Pintura', preco: 50, desc: 'Acabamento liso perfeito + pintura' }
            ]
        },
        {
            id: 'reforma',
            nome: 'Reforma Completa',
            icone: 'fas fa-tools',
            badgeDestaque: 'Mais Pedido',
            tipos: [
                { nome: 'Reforma Básica', preco: 280, desc: 'Pintura, piso, elétrica e hidráulica básica' },
                { nome: 'Reforma Intermediária', preco: 420, desc: 'Básica + troca de revestimentos e louças' },
                { nome: 'Reforma Premium', preco: 600, desc: 'Completa com materiais de primeira linha' },
                { nome: 'Reforma de Banheiro', preco: 350, desc: 'Revestimento, louças, box, hidráulica' },
                { nome: 'Reforma de Cozinha', preco: 380, desc: 'Piso, revestimento, elétrica, hidráulica' },
                { nome: 'Reforma Comercial', preco: 450, desc: 'Adaptação de espaço comercial completa' }
            ]
        }
    ];

    // ===================== DOM =====================
    var DOM = {};
    function cacheDom() {
        DOM.header = document.getElementById('main-header');
        DOM.menuOverlay = document.getElementById('menuOverlay');
        DOM.menuContent = document.getElementById('menuContent');
        DOM.hamburger = document.querySelector('.hamburger');
        DOM.servicosList = document.getElementById('servicos-list');
        DOM.stepServicos = document.getElementById('step-servicos');
        DOM.stepTipos = document.getElementById('step-tipos');
        DOM.stepCalculo = document.getElementById('step-calculo');
        DOM.tipoTitulo = document.getElementById('tipo-titulo');
        DOM.tabelaBody = document.getElementById('tabela-body');
        DOM.calcServico = document.getElementById('calc-servico');
        DOM.calcTipo = document.getElementById('calc-tipo');
        DOM.calcPreco = document.getElementById('calc-preco');
        DOM.metrosInput = document.getElementById('metros');
        DOM.resultado = document.getElementById('resultado');
        DOM.btnCalcular = document.getElementById('btn-calcular');
        DOM.whatsappOrcamento = document.getElementById('whatsapp-orcamento');
        DOM.scrollTop = document.getElementById('scrollTop');
        DOM.lightbox = document.getElementById('lightbox');
        DOM.lightboxImg = document.getElementById('lightbox-img');
    }

    // ===================== STATE =====================
    var state = {
        menuOpen: false,
        servicoAtual: null,
        tipoAtual: null,
        precoAtual: 0
    };

    // ===================== MENU =====================
    function openMenu() {
        if (state.menuOpen) return;
        state.menuOpen = true;
        DOM.menuOverlay.style.display = 'block';
        DOM.hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(function () {
            DOM.menuOverlay.classList.add('active');
            DOM.menuContent.classList.add('active');
        });
    }

    function closeMenu() {
        if (!state.menuOpen) return;
        state.menuOpen = false;
        DOM.menuContent.classList.remove('active');
        DOM.menuOverlay.classList.remove('active');
        DOM.hamburger.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(function () { DOM.menuOverlay.style.display = 'none'; }, 400);
    }

    window.toggleMenu = function () { state.menuOpen ? closeMenu() : openMenu(); };

    window.goToSection = function (id) {
        closeMenu();
        var el = document.getElementById(id);
        if (el) {
            var offset = DOM.header.offsetHeight + 10;
            var top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    };

    // ===================== BUILD SERVICE CARDS =====================
    function buildServiceCards() {
        var html = '';
        SERVICOS.forEach(function (s) {
            var badge = '';
            if (s.badge) badge = '<span class="orc-badge">' + s.badge + '</span>';
            if (s.badgeDestaque) badge = '<span class="orc-badge" style="background:var(--orange);">' + s.badgeDestaque + '</span>';
            var minPreco = Math.min.apply(null, s.tipos.map(function (t) { return t.preco; }));
            html += '<div class="orc-card reveal" onclick="selecionarServico(\'' + s.id + '\')">' +
                badge +
                '<div class="orc-card-icon"><i class="' + s.icone + '"></i></div>' +
                '<div>' +
                '<h4>' + s.nome + '</h4>' +
                '<span>A partir de R$ ' + minPreco + ',00/m² • ' + s.tipos.length + ' opções</span>' +
                '</div>' +
                '</div>';
        });
        DOM.servicosList.innerHTML = html;
        initReveal();
    }

    // ===================== STEP NAVIGATION =====================
    window.selecionarServico = function (id) {
        var servico = SERVICOS.find(function (s) { return s.id === id; });
        if (!servico) return;
        state.servicoAtual = servico;
        DOM.tipoTitulo.textContent = servico.nome;
        var bodyHtml = '';
        servico.tipos.forEach(function (t, i) {
            bodyHtml += '<tr onclick="selecionarTipo(' + i + ')">' +
                '<td><strong>' + t.nome + '</strong></td>' +
                '<td><strong style="color:var(--primary);">R$ ' + t.preco + ',00</strong></td>' +
                '<td>' + t.desc + '</td>' +
                '<td><button class="btn-selecionar">Selecionar</button></td>' +
                '</tr>';
        });
        DOM.tabelaBody.innerHTML = bodyHtml;
        DOM.stepServicos.style.display = 'none';
        DOM.stepTipos.style.display = 'block';
        DOM.stepCalculo.style.display = 'none';
        goToSection('orcamento');
    };

    window.selecionarTipo = function (index) {
        var tipo = state.servicoAtual.tipos[index];
        state.tipoAtual = tipo;
        state.precoAtual = tipo.preco;
        DOM.calcServico.textContent = state.servicoAtual.nome;
        DOM.calcTipo.textContent = tipo.nome;
        DOM.calcPreco.textContent = 'R$ ' + tipo.preco + ',00 / m²';
        DOM.metrosInput.value = '';
        DOM.resultado.style.display = 'none';
        DOM.whatsappOrcamento.style.display = 'none';
        DOM.stepTipos.style.display = 'none';
        DOM.stepCalculo.style.display = 'block';
        DOM.metrosInput.focus();
        goToSection('orcamento');
    };

    window.voltarServicos = function () {
        DOM.stepTipos.style.display = 'none';
        DOM.stepCalculo.style.display = 'none';
        DOM.stepServicos.style.display = 'block';
    };

    window.voltarTipos = function () {
        DOM.stepCalculo.style.display = 'none';
        DOM.stepTipos.style.display = 'block';
    };

    // ===================== CALCULATOR =====================
    window.calcularTotal = function () {
        var metros = parseFloat(DOM.metrosInput.value);
        if (!metros || metros <= 0) {
            DOM.metrosInput.style.borderColor = '#ef4444';
            DOM.metrosInput.focus();
            setTimeout(function () { DOM.metrosInput.style.borderColor = ''; }, 2000);
            return;
        }

        // Loading spinner
        var btn = DOM.btnCalcular;
        var originalText = btn.innerHTML;
        btn.innerHTML = '<div class="spinner"></div> Calculando...';
        btn.classList.add('loading');

        setTimeout(function () {
            var total = metros * state.precoAtual;
            DOM.resultado.innerHTML =
                '<div class="result-service">' + state.servicoAtual.nome + '</div>' +
                '<div class="result-detail">' + state.tipoAtual.nome + '</div>' +
                '<div class="result-detail">' +
                metros.toLocaleString('pt-BR') + ' m² × R$ ' +
                state.precoAtual.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) +
                '</div>' +
                '<div class="result-total">R$ ' +
                total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) +
                '</div>';
            DOM.resultado.style.display = 'block';

            // WhatsApp button
            var msg = 'Olá! Gostaria de um orçamento para:\n' +
                '• Serviço: ' + state.servicoAtual.nome + '\n' +
                '• Tipo: ' + state.tipoAtual.nome + '\n' +
                '• Área: ' + metros + ' m²\n' +
                '• Estimativa: R$ ' + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            DOM.whatsappOrcamento.href = 'https://wa.me/5542984058422?text=' + encodeURIComponent(msg);
            DOM.whatsappOrcamento.style.display = 'flex';

            btn.innerHTML = originalText;
            btn.classList.remove('loading');
            DOM.resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 800);
    };

    // Enter key to calculate
    document.getElementById('metros').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') calcularTotal();
    });

    // ===================== FAQ =====================
    window.toggleFaq = function (el) {
        var item = el.closest('.faq-item');
        var wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item.active').forEach(function (f) {
            f.classList.remove('active');
        });
        if (!wasActive) item.classList.add('active');
    };

    // ===================== LIGHTBOX =====================
    window.openLightbox = function (el) {
        var img = el.querySelector('img');
        if (img) {
            DOM.lightboxImg.src = img.src.replace('w=600', 'w=1200');
            DOM.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function () {
        DOM.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    // ===================== SCROLL EFFECTS =====================
    function handleScroll() {
        var scrollY = window.scrollY;
        DOM.header.classList.toggle('scrolled', scrollY > 60);
        DOM.scrollTop.classList.toggle('visible', scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ===================== ANIMATED COUNTERS =====================
    function animateCounters() {
        var counters = document.querySelectorAll('.stat-number');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var target = parseInt(el.getAttribute('data-target'));
                    var duration = 2000;
                    var start = 0;
                    var startTime = null;

                    function step(timestamp) {
                        if (!startTime) startTime = timestamp;
                        var progress = Math.min((timestamp - startTime) / duration, 1);
                        var eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.floor(eased * target);
                        if (progress < 1) requestAnimationFrame(step);
                        else el.textContent = target;
                    }
                    requestAnimationFrame(step);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(function (c) { observer.observe(c); });
    }

    // ===================== REVEAL ON SCROLL =====================
    function initReveal() {
        var elements = document.querySelectorAll('.reveal:not(.visible)');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, i) {
                if (entry.isIntersecting) {
                    setTimeout(function () {
                        entry.target.classList.add('visible');
                    }, i * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        elements.forEach(function (el) { observer.observe(el); });
    }

    // ===================== SMOOTH ANCHOR LINKS =====================
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                goToSection(href.slice(1));
            }
        });
    });

    // ===================== KEYBOARD =====================
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (DOM.lightbox.classList.contains('active')) closeLightbox();
            else if (state.menuOpen) closeMenu();
        }
    });

    // Close menu on overlay click
    document.getElementById('menuOverlay').addEventListener('click', function (e) {
        if (!DOM.menuContent.contains(e.target)) closeMenu();
    });

    // ===================== INIT =====================
    cacheDom();
    buildServiceCards();
    animateCounters();
    initReveal();
    handleScroll();

/*=========================
LOADER
=========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("loader-hide");

},800);

});

/*=========================
BOTÃO TOPO
=========================*/

window.addEventListener("scroll",()=>{

const btn=document.getElementById("scrollTop");

if(window.scrollY>400){

btn.style.display="flex";

}else{

btn.style.display="none";

}

});

document.getElementById("scrollTop").onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*=========================
SCROLL REVEAL
=========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".reveal").forEach(el=>{

observer.observe(el);

});


})();