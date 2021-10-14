const button = document.querySelector('button');
button.addEventListener('click', function (){
    const r = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);

    const randomColour = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = randomColour;

    const textColour = document.querySelector('h2')
    textColour.innerText = randomColour;
})     
    
