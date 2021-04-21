const tempCheckbox = document.querySelector('input[type="checkbox"]');
const tempBlock = document.querySelector('.input-group__temperature-row');

tempCheckbox.addEventListener('click', () => {
  if(tempCheckbox.checked) {
    tempBlock.classList.add('input-group__temperature-row--active')
  }
  else {
    tempBlock.classList.remove('input-group__temperature-row--active')
  }
})

