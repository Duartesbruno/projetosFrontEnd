 export default function initAnimacaoNavbar() { 
  const menuHamburguer = document.querySelector('.menu-hamburguer');
  const navMenu = document.querySelector('.nav-menu');

  // Função para fechar o menu
  function fecharMenu() {
    menuHamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  }

  // Função para verificar a largura da tela e fechar o menu se necessário
  function checkScreenWidth() {
    // Verifica se a largura da tela é maior que 639px
    if (window.innerWidth > 639) {
      // Fecha o menu se estiver aberto
      if (menuHamburguer.classList.contains('active')) {
        fecharMenu();
      }
    }
  }

  // Adiciona um event listener para o evento resize
  window.addEventListener('resize', checkScreenWidth);

  // Adiciona um event listener para fechar o menu quando clicar fora dele
  document.addEventListener('click', function(event) {
    // Verifica se o clique foi fora do menu e do botão hamburguer
    if (!menuHamburguer.contains(event.target) && !navMenu.contains(event.target)) {
      // Realize a ação desejada, por exemplo, fechar o menu
      fecharMenu();
    }
  });

  // Adiciona um event listener para o botão hamburguer
  menuHamburguer.addEventListener('click', function() {
    // Alterna a classe 'active' no menu e no botão hamburguer
    menuHamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Verifica a largura da tela quando a página é carregada
  checkScreenWidth();
 }