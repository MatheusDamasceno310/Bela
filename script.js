
let contador = 0;

const videos = document.querySelectorAll('#container2 video');

    // Função para dar play no vídeo
    function playVideo(event) {
        event.target.play();
    }

    // Função para pausar o vídeo
    function pauseVideo(event) {
        event.target.pause();
    }

    // Adiciona o evento de mouseover para dar play
    videos.forEach(video => {
        video.addEventListener('mouseover', playVideo);
        video.addEventListener('mouseout', pauseVideo);
    });

function abrirEnvelope() {
    const envelope = document.querySelector('.exterior');
    envelope.classList.toggle('aba');

    if (contador == 0) {

        const musica = document.getElementById('musica');
        musica.play();

        const pelicula = document.getElementById('pelicula');

        function escolendoCor() {
            
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

            pelicula.style.backgroundColor = randomColor;
        }
        
        const foto = document.getElementById('fotoMovendo');
        foto.style.display='block';

        const div = document.getElementById('fotoMovendo');
            let posX = window.innerWidth / 2 - 50; // Começa no centro
            let posY = window.innerHeight / 2 - 50; // Começa no centro
            let velocityX = 5; // Velocidade horizontal
            let velocityY = 5; // Velocidade vertical

            function moveDiv() {
                posX += velocityX;
                posY += velocityY;

                // Colisão com a borda direita
                if (posX + 200 > window.innerWidth || posX < 0) {
                    velocityX = -velocityX; 
                    pelicula.style.opacity='0.1';
                    escolendoCor();
                }

                // Colisão com a borda inferior
                if (posY + 260 > window.innerHeight || posY < 0) {
                    velocityY = -velocityY; 
                    pelicula.style.opacity='0.2';
                    escolendoCor();
                }

                div.style.left = posX + 'px';
                div.style.top = posY + 'px';

                requestAnimationFrame(moveDiv); // Chama a função de novo para continuar o movimento
            }

        moveDiv(); // Inicia a animação
    }

    contador = 1;
}

function explosao() {

    const musica = document.getElementById('musica');
    musica.pause();
    
    const gif1 = document.getElementById('gif1');
    gif1.style.display='block';

    const container1 = document.getElementById('container1');
    container1.style.display='none';

    const foto = document.getElementById('fotoMovendo');
    foto.style.display='none';

    const pelicula = document.getElementById('pelicula');

    setInterval(() => {

        if (contador != 2) {
        
            const gif1 = document.getElementById('gif1');
            gif1.style.display='none';

            const iloveyou = document.getElementById('iloveyou');
            iloveyou.style.display='block';

            const pelicula = document.getElementById('pelicula');
            pelicula.style.display='none'

            let intervalId = setInterval(() => {
                const iloveyou = document.getElementById('iloveyou');
                iloveyou.style.display = 'none';
            
                const container2 = document.getElementById('container2');
                container2.style.display = 'flex';
            
                clearInterval(intervalId);
            }, 5000);

            contador = 2;
        }
    }, 4000);
}

function aparecerPoema() {

    const container2 = document.getElementById('container2');
    container2.style.display='none';

    const container3 = document.getElementById('container3');
    container3.style.top='50vh';
}

let mudarPoemaN = 0;

function mudarPoema(){

    if (mudarPoemaN == 0) {
        const container3 = document.getElementById('container3');
        container3.style.background='#444';

        const euTeAmo = document.getElementById('euTeAmo');
        euTeAmo.style.display='block';

        mudarPoemaN = 1;

    } else {

        const container3 = document.getElementById('container3');
        container3.style.background='#fff';

        const euTeAmo = document.getElementById('euTeAmo');
        euTeAmo.style.display='none';

        mudarPoemaN = 0;
        
    }
}

function voltarPoema(){
    const container2 = document.getElementById('container2');
    container2.style.display='flex';

    const container3 = document.getElementById('container3');
    container3.style.top='-400px';
}