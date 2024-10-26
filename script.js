function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var body = document.body;

    // Verifica o estado atual da sidebar
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        // Se estiver oculta, mostra a sidebar e desativa o scroll do corpo da página
        sidebar.style.display = "block";
        body.classList.add("no-scroll");
    } else {
        // Se estiver visível, oculta a sidebar e reativa o scroll do corpo da página
        sidebar.style.display = "none";
        body.classList.remove("no-scroll");
    }
}

// Mostrar a imagem "back-to-top" ao rolar a página
window.onscroll = function() {
    var img = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        img.classList.add('show'); // Adiciona a classe "show" quando a rolagem passa de 100px
    } else {
        img.classList.remove('show'); // Remove a classe "show" se a rolagem for menor que 100px
    }
};

// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Rolagem suave até o topo
}

(function() {
    const starRatingSystem = document.querySelector('.star-rating-system');
    const stars = document.querySelectorAll('.star-rating .star');
    
    // Adiciona evento de clique para cada estrela no sistema de classificação
    stars.forEach(function(star, key) {
        star.addEventListener('click', function() {
            // Define a pontuação selecionada como um atributo no sistema de classificação
            starRatingSystem.setAttribute('data-score', key + 1);
        });
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    let liked = null;

    // Gerencia o estado de "like" e "dislike" com mudança de cor de fundo
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

    // Manipula o envio do formulário de avaliação
    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Redireciona para a página principal após a submissão
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

    // Adiciona evento ao botão de compra
    document.getElementById('btnCompra').addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do botão

        // Valida se todos os campos do formulário foram preenchidos
        var number = document.getElementById('number').value;
        var name = document.getElementById('name').value;
        var expiry = document.getElementById('expiry').value;
        var cvc = document.getElementById('cvc').value;

        if (number && name && expiry && cvc) {
            // Redireciona para uma página de perguntas se a validação for bem-sucedida
            window.location.href = 'pergunta.html';
        } else {
            // Exibe uma mensagem de erro se houver campos em branco
            alert('Por favor, preencha todos os campos.');
        }
    });
});

function updateQuantity(quantidade) {
    const quantityDisplay = document.getElementById('quantityDisplay');
    const currentValue = parseInt(quantityDisplay.textContent, 10);

    if (quantidade === '+') {
        // Incrementa a quantidade
        quantityDisplay.textContent = String(currentValue + 1);
    } else if (quantidade === '-') {
        // Decrementa a quantidade, mas mantém no mínimo 1
        if (currentValue > 1) {
            quantityDisplay.textContent = String(currentValue - 1);
        }
    }
}

// Função para lidar com o envio do formulário de login
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Redireciona para a página inicial após o login
    window.location.href = "index.html";
}

// Função para alternar a visibilidade da senha
function togglePasswordVisibility(passwordFieldId) {
    var passwordField = document.getElementById(passwordFieldId);
    var showPasswordImage = document.querySelector("#" + passwordFieldId + " + .show-password-image");

    if (passwordField.type === "password") {
        // Mostra a senha como texto
        passwordField.type = "text";
        showPasswordImage.style.backgroundImage = url('imagens/visivel.png');
    } else {
        // Oculta a senha como ponto
        passwordField.type = "password";
        showPasswordImage.style.backgroundImage = url('imagens/olho.png');
    }
}

// Função para verificar se as duas senhas coincidem
function verificarSenhas() {
    var senha1 = document.getElementById("password1").value;
    var senha2 = document.getElementById("password2").value;

    if (senha1 === senha2) {
        // Redireciona para a página inicial se as senhas coincidirem
        window.location.href = "index.html";
        event.preventDefault();
        return true;
    } else {
        // Exibe uma mensagem de erro e limpa os campos de senha se não coincidirem
        alert("As senhas não coincidem. Por favor, verifique novamente.");
        document.getElementById("password1").value = "";
        document.getElementById("password2").value = "";
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slide = document.querySelector('.carousel-slide');
    const slideWidth = slide.clientWidth / 10; // Largura dividida para exibir 5 imagens ao mesmo tempo
    let currentPosition = -(slideWidth * 2); // Inicia na terceira imagem

    slide.style.transform = `translateX(${currentPosition}px)`; // Define a posição inicial do carrossel

    let intervalId;

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

    // Inicia a mudança automática de slides
    function startInterval() {
        intervalId = setInterval(nextSlide, 1500); // Muda a cada 1,5 segundos
    }

    // Para a mudança automática ao passar o mouse sobre o carrossel
    slide.addEventListener('mouseenter', function() {
        clearInterval(intervalId);
    });

    // Reinicia a mudança automática ao remover o mouse do carrossel
    slide.addEventListener('mouseleave', function() {
        startInterval();
    });

    // Adiciona eventos de clique nos botões de navegação
    nextBtn.addEventListener('click', function() {
        nextSlide();
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
    });

    // Inicia a mudança automática ao carregar a página
    startInterval();
});

function comprar() {
    // Redireciona para a página de pagamento
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
    
    // Redireciona para a página correspondente com base no termo de pesquisa
    switch (termoPesquisa) {
        case "ferrari":
            window.location.href = "ferrari.html";
            break;
        case "mercedes":
            window.location.href = "mercedes.html";
            break;
        case "lamborghini":
            window.location.href = "lamborghini.html";
            break;
        default:
            alert("Página não encontrada para o termo: " + termoPesquisa);
            break;
    }
}
