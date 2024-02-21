
const buttons = document.querySelectorAll('.readMore_btn');
const textElements = document.querySelectorAll('.contenido');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('show');
  });
});




