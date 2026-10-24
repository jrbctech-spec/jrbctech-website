/**
 * JRBC TECH — GLOBAL INNOVATIONS
 * Script Oficial de Interatividade, Navegação, Formulários e WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuração Oficial de Contato
  const WHATSAPP_PHONE = '5563981213180'; // (63) 8121-3180 / (63) 98121-3180
  const DEFAULT_WA_MSG = 'Olá, gostaria de conhecer as soluções tecnológicas da JRBC TECH.';

  /* ==========================================================================
     1. Menu Mobile e Navegação
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isActive);
      mobileToggle.innerHTML = isActive
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Fechar ao clicar em qualquer link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  /* ==========================================================================
     2. Destaque de Link Ativo no Scroll
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     3. Formulário de Contato e Envio Estruturado
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('contact-name')?.value.trim() || '';
      const empresa = document.getElementById('contact-company')?.value.trim() || 'Não informada';
      const email = document.getElementById('contact-email')?.value.trim() || 'Não informado';
      const telefone = document.getElementById('contact-phone')?.value.trim() || '';
      const cidade = document.getElementById('contact-city')?.value.trim() || 'Palmas / Tocantins';
      const solucao = document.getElementById('contact-solution')?.value || 'Soluções Tecnológicas';
      const mensagem = document.getElementById('contact-message')?.value.trim() || 'Solicitação de atendimento';

      if (!nome || !telefone) {
        alert('Por favor, preencha os campos obrigatórios (Nome e Telefone).');
        return;
      }

      // Monta a mensagem no padrão empresarial para o WhatsApp
      const waMessage = 
`*SOLICITAÇÃO DE CONTATO — JRBC TECH*
• *Nome:* ${nome}
• *Empresa:* ${empresa}
• *Telefone:* ${telefone}
• *E-mail:* ${email}
• *Cidade:* ${cidade}
• *Tipo de Solução:* ${solucao}
• *Mensagem:* ${mensagem}`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`;

      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Redireciona para o WhatsApp após breve confirmação
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
    });
  }

  /* ==========================================================================
     4. Gatilhos de Ação Rápida WhatsApp
     ========================================================================== */
  document.querySelectorAll('.open-wa-solution').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const solName = btn.getAttribute('data-solution') || 'uma solução tecnológica';
      const msg = `Olá! Gostaria de conversar com a equipe da JRBC TECH sobre: *${solName}*.`;
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  });
});
