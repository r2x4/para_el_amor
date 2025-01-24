function changeImage(buttonType) {
    let imageDisplay = document.getElementById('imageDisplay');
    let textContainer = document.getElementById('textContainer');
    let textDisplay = document.getElementById('textDisplay');
    
    
    textContainer.style.display = 'flex';

    // Cambiar imagen y texto según el botón
    if (buttonType === 'amor') {
        imageDisplay.src = './IMAGENES/Osa.jpg'; 
        textDisplay.innerText = 'Eres el amor de mi vida!';

    } else if (buttonType === 'persona') {
        imageDisplay.src = './IMAGENES/Persona_favorita.jpg'; 
        textDisplay.innerText = 'Eres mi persona favorita!'; 

    } else if (buttonType === 'feliz') {
        imageDisplay.src = './IMAGENES/Feliz.jpg'; 
        textDisplay.innerText = 'Tu felicidad es mi felicidad!'; 

    } else if (buttonType === 'alegria') {
        imageDisplay.src = './IMAGENES/Alegria.jpg'; 
        textDisplay.innerText = 'Tu alegría ilumina mi vida!'; 
        
    } else if (buttonType === 'sonrisa') {
        imageDisplay.src = './IMAGENES/Sonrisa.jpg'; 
        textDisplay.innerText = 'Tu sonrisa es mi mejor medicina!'; 

    } else if (buttonType === 'vida') {
        imageDisplay.src = './IMAGENES/Vida.jpg'; 
        textDisplay.innerText = 'Mi vida es más Feliz por ti!'; 

    } else if (buttonType === 'juntos') {
        imageDisplay.src = './IMAGENES/Juntos.jpg'; 
        textDisplay.innerText = 'Juntos somos imparables!'; 
    }
}













