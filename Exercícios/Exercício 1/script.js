const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');

function ler (){
    const textLength = textArea.value.length;
    charCount.textContent = `Caracteres: ${textLength}`;
};