const capacitySelect = document.querySelector('.select-group__capacity');
const capacitySelectTitle = capacitySelect.querySelector('.select-group__title-capacity');
const capacitySelectLabels = capacitySelect.querySelectorAll('.select-group__label-capacity');

const loadingSelect = document.querySelector('.select-group__loading');
const loadingSelectTitle = loadingSelect.querySelector('.select-group__title-loading');
const loadingSelectLabels = loadingSelect.querySelectorAll('.select-group__label-loading');

const cargoSelect = document.querySelector('.select-group__cargo');
const cargoSelectTitle = cargoSelect.querySelector('.select-group__title-cargo');
const cargoSelectLabels = cargoSelect.querySelectorAll('.select-group__label-cargo');

const hazardSelect = document.querySelector('.select-group__hazard');
const hazardSelectTitle = hazardSelect.querySelector('.select-group__title-hazard');
const hazardSelectLabels = hazardSelect.querySelectorAll('.select-group__label-hazard');

// capacity select toggle
capacitySelectTitle.addEventListener('click', () => {
  if('active' === capacitySelect.getAttribute('data-state')) {
    capacitySelect.setAttribute('data-state', '');
  }
  else {
    capacitySelect.setAttribute('data-state', 'active');
  }
});
// capacity select close when option is selected
for (let i = 0; i < capacitySelectLabels.length; i++) {
  capacitySelectLabels[i].addEventListener('click', (e) => {
    capacitySelectTitle.textContent = e.target.textContent;
    capacitySelect.setAttribute('data-state', '');
  });
}

// loading select toggle
loadingSelectTitle.addEventListener('click', () => {
  if('active' === loadingSelect.getAttribute('data-state')) {
    loadingSelect.setAttribute('data-state', '');
  }
  else {
    loadingSelect.setAttribute('data-state', 'active')
  }
});
// loading select close when option is selected
for (let i = 0; i < loadingSelectLabels.length; i++) {
  loadingSelectLabels[i].addEventListener('click', (e) => {
    loadingSelectTitle.textContent = e.target.textContent;
    loadingSelect.setAttribute('data-state', '');
  });
}

// cargo select toggle
cargoSelectTitle.addEventListener('click', () => {
  if('active' === cargoSelect.getAttribute('data-state')) {
    cargoSelect.setAttribute('data-state', '')
  }
  else {
    cargoSelect.setAttribute('data-state', 'active')
  }
});
// cargo select close when option is selected
for (let i = 0; i < capacitySelectLabels.length; i++) {
  cargoSelectLabels[i].addEventListener('click', (e) => {
    cargoSelectTitle.textContent = e.target.textContent;
    cargoSelect.setAttribute('data-state', '')
  })
}

// hazard select toggle
hazardSelect.addEventListener('click', () => {
  if('active' === hazardSelect.getAttribute('data-state')) {
    hazardSelect.setAttribute('data-state', '')
  }
  else {
    hazardSelect.setAttribute('data-state', 'active')
  }
});
// hazard select close when option is selected
for (let i = 0; i < hazardSelectLabels.length; i++) {
  hazardSelectLabels[i].addEventListener('click', (e) => {
    hazardSelectTitle.textContent = e.target.textContent;
    hazardSelect.setAttribute('data-state', '')
  })
}
