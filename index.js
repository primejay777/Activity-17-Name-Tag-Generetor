const generateButton = document.getElementById('generateButton');
const nameInput = document.getElementById('nameInput');
const nameTag = document.getElementById('nameTag');

generateButton.addEventListener('click', function() {
  const name = nameInput.value.trim();

  if (name !== '') {
    nameTag.textContent = name;
    nameTag.style.backgroundColor = randomColor();
    nameTag.style.fontFamily = randomFont();
    nameTag.style.fontSize = randomFontSize();
    nameTag.style.textShadow = randomShadow();
  } else {
    nameTag.textContent = 'Your Name';
  }
    
  
});

function randomColor() {
    let r = Math.random() * 255,
        g = Math.random() * 255,
        b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`
}


function randomFont() {
    const fonts = ['cursive', 'fantasy', 'monospace', 'sans-serif', 'serif']
    let i = Math.round(Math.random() * fonts.length);
    
    return `${fonts[i]}`;
}

function randomFontSize() {
    let I = Math.random() * 100;
    
    return `${I}px`;
}

function randomShadow() {
    let s1 = Math.random() * 40,
        s2 = Math.random() * 40,
        s3 = Math.random() * 40;
    
    return `${s1}px ${s2}px ${s3}px rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}
