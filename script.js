function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var body = document.body;

    // Verifica o estado atual da sidebar
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        // Se estiver oculta, mostra a sidebar e desativa o scroll
        sidebar.style.display = "block";
        body.classList.add("no-scroll");
    } else {
        // Se estiver visível, oculta a sidebar e reativa o scroll
        sidebar.style.display = "none";
        body.classList.remove("no-scroll");
    }
}

 // Mostrar a imagem ao rolar a página
 window.onscroll = function() {
    var img = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        img.classList.add('show');
    } else {
        img.classList.remove('show');
    }
};

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

(function() {
    const starRatingSystem = document.querySelector('.star-rating-system');
    const stars = document.querySelectorAll('.star-rating .star');
    const likeButton = document.getElementById('like-button');
    const dislikeButton = document.getElementById('dislike-button');
    const commentBox = document.getElementById('comment-box');
    const submitCommentButton = document.getElementById('submit-comment');
  
    stars.forEach(function(star, key) {
      star.addEventListener('click', function() {
        starRatingSystem.setAttribute('data-score', key + 1);
      });
    });
  })();
  
  document.addEventListener('DOMContentLoaded', () => {
      let liked = null;
  
      document.getElementById('likeButton').addEventListener('click', () => {
          liked = true;
          document.getElementById('likeButton').style.backgroundColor = 'lightgreen';
          document.getElementById('dislikeButton').style.backgroundColor = '';
      });
  
      document.getElementById('dislikeButton').addEventListener('click', () => {
          liked = false;
          document.getElementById('likeButton').style.backgroundColor = '';
          document.getElementById('dislikeButton').style.backgroundColor = 'lightcoral';
      });
  
      document.getElementById('reviewForm').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the default form submission
  
          // If validation passes, redirect to the index.html
          window.location.href = 'index.html';
      });
  });

  $(document).ready(function() {
    var card = new Card({
        form: '#cc-form',
        container: '.card-wrapper',
        formSelectors: {
            numberInput: '#number',
            expiryInput: '#expiry',
            cvcInput: '#cvc',
            nameInput: '#name'
        },
        width: 200,
        formatting: true,
        debug: false
    });

    document.getElementById('btnCompra').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar o comportamento padrão do botão de compra
      
        // Validar os campos do formulário
        var number = document.getElementById('number').value;
        var name = document.getElementById('name').value;
        var expiry = document.getElementById('expiry').value;
        var cvc = document.getElementById('cvc').value;
    
        // Verificar se todos os campos estão preenchidos
        if (number && name && expiry && cvc) {
            // Redirecionar para outro HTML
            window.location.href = 'pergunta.html';
        } else {
            // Exibir mensagem de erro ou tomar outra ação, caso deseje
            alert('Por favor, preencha todos os campos.');
        }
    });
});

function updateQuantity(quantidade) {
    const quantityDisplay = document.getElementById('quantityDisplay');
    const currentValue = parseInt(quantityDisplay.textContent, 10);
    if (quantidade === '+') {
      quantityDisplay.textContent = String(currentValue + 1);
    } else if (quantidade === '-') {
      if (currentValue > 1) {
        quantityDisplay.textContent = String(currentValue - 1);
      }
    }
  }
// Função para lidar com o envio do formulário de login
function handleLoginFormSubmit(event) {
    // Evita que o formulário seja enviado normalmente
    event.preventDefault();
    
    // Redireciona para a página inicial após o login
    window.location.href = "index.html";
}

function togglePasswordVisibility(passwordFieldId) {
    var passwordField = document.getElementById(passwordFieldId);
    var showPasswordImage = document.querySelector("#" + passwordFieldId + " + .show-password-image");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordImage.style.backgroundImage = url('imagens/visivel.png');
    } else {
        passwordField.type = "password";
        showPasswordImage.style.backgroundImage = url('imagens/olho.png');
    }
}

function verificarSenhas() {
    var senha1 = document.getElementById("password1").value;
    var senha2 = document.getElementById("password2").value;

    if (senha1 === senha2) {
        // Redireciona para a página index.html
        window.location.href = "index.html";
        event.preventDefault();
        return true;
    } else {
        // Exibe mensagem de erro
        alert("As senhas não coincidem. Por favor, verifique novamente.");

        // Limpa os campos de senha
        document.getElementById("password1").value = "";
        document.getElementById("password2").value = "";

        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slide = document.querySelector('.carousel-slide');
    const slideWidth = slide.clientWidth / 10; // Dividido por 5 para 5 imagens visíveis
    let currentPosition = -(slideWidth * 2); // Inicia o carrossel com a terceira imagem visível, cortando as duas primeiras

    slide.style.transform = `translateX(${currentPosition}px)`; // Aplica o corte inicial

    let intervalId; // Variável para armazenar o ID do intervalo

    // Função para mover para a próxima imagem
    function nextSlide() {
        if (currentPosition > -(slideWidth * (slide.children.length - 5))) {
            currentPosition -= slideWidth;
        } else {
            currentPosition = 0;
        }
        slide.style.transform = `translateX(${currentPosition}px)`;
    }

    // Função para mover para a imagem anterior
    function prevSlide() {
        if (currentPosition < 0) {
            currentPosition += slideWidth;
        } else {
            currentPosition = -(slideWidth * (slide.children.length - 10));
        }
        slide.style.transform = `translateX(${currentPosition}px)`;
    }

    // Inicia o intervalo para mudar as imagens automaticamente
    function startInterval() {
        intervalId = setInterval(nextSlide, 1500); // Muda a cada 1,5 segundos (1500 milissegundos)
    }

    // Para o intervalo quando o mouse entra no carrossel
    slide.addEventListener('mouseenter', function() {
        clearInterval(intervalId);
    });

    // Reinicia o intervalo quando o mouse sai do carrossel
    slide.addEventListener('mouseleave', function() {
        startInterval();
    });

    // Adiciona eventos de clique aos botões de navegação
    nextBtn.addEventListener('click', function() {
        nextSlide();
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
    });

    // Inicia o intervalo automaticamente ao carregar a página
    startInterval();
});

function comprar() {
    window.location.href = "pagar.html";
}

$(document).ready(function() {
    var card = new Card({
        form: '#cc-form',
        container: '.card-wrapper',
        formSelectors: {
            numberInput: '#number',
            expiryInput: '#expiry',
            cvcInput: '#cvc',
            nameInput: '#name'
        },
        width: 200,
        formatting: true,
        debug: false
    });
});

function realizarPesquisa() {
    // Obtém o valor digitado na caixa de pesquisa, removendo espaços em branco
    var termoPesquisa = document.getElementById('pesquisaInput').value.toLowerCase().trim();
    
    // Redireciona para a página HTML correspondente
    switch (termoPesquisa) {
        case 'gabinetes':
            window.location.href = 'gabinetes.html';
            break;
        case 'gabinete':
        window.location.href = 'gabinetes.html';
            break;
        case 'periféricos':
            window.location.href = 'Periféricos.html';
            break;
        case 'periférico':
        window.location.href = 'Periféricos.html';
            break;
        case 'notebook':
            window.location.href = 'Notebook.html';
            break;
        case 'hardware':  
            window.location.href = 'Peças.html';  
            break;
        case 'hardwares':  
            window.location.href = 'Peças.html';  
            break;
        case 'monitor':
            window.location.href = 'monitor.html';
            break;
        case 'monitores':
            window.location.href = 'monitor.html';
            break;
        default:
            alert("Termo de pesquisa não reconhecido!");
            break;
    }
}