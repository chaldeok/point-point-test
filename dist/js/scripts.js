"use strict";var capacitySelect=document.querySelector(".select-group__capacity"),capacitySelectTitle=capacitySelect.querySelector(".select-group__title-capacity"),capacitySelectLabels=capacitySelect.querySelectorAll(".select-group__label-capacity"),loadingSelect=document.querySelector(".select-group__loading"),loadingSelectTitle=loadingSelect.querySelector(".select-group__title-loading"),loadingSelectLabels=loadingSelect.querySelectorAll(".select-group__label-loading"),cargoSelect=document.querySelector(".select-group__cargo"),cargoSelectTitle=cargoSelect.querySelector(".select-group__title-cargo"),cargoSelectLabels=cargoSelect.querySelectorAll(".select-group__label-cargo"),hazardSelect=document.querySelector(".select-group__hazard"),hazardSelectTitle=hazardSelect.querySelector(".select-group__title-hazard"),hazardSelectLabels=hazardSelect.querySelectorAll(".select-group__label-hazard");capacitySelectTitle.addEventListener("click",(function(){"active"===capacitySelect.getAttribute("data-state")?capacitySelect.setAttribute("data-state",""):capacitySelect.setAttribute("data-state","active")}));for(var i=0;i<capacitySelectLabels.length;i++)capacitySelectLabels[i].addEventListener("click",(function(e){capacitySelectTitle.textContent=e.target.textContent,capacitySelect.setAttribute("data-state","")}));loadingSelectTitle.addEventListener("click",(function(){"active"===loadingSelect.getAttribute("data-state")?loadingSelect.setAttribute("data-state",""):loadingSelect.setAttribute("data-state","active")}));for(var _i=0;_i<loadingSelectLabels.length;_i++)loadingSelectLabels[_i].addEventListener("click",(function(e){loadingSelectTitle.textContent=e.target.textContent,loadingSelect.setAttribute("data-state","")}));cargoSelectTitle.addEventListener("click",(function(){"active"===cargoSelect.getAttribute("data-state")?cargoSelect.setAttribute("data-state",""):cargoSelect.setAttribute("data-state","active")}));for(var _i2=0;_i2<capacitySelectLabels.length;_i2++)cargoSelectLabels[_i2].addEventListener("click",(function(e){cargoSelectTitle.textContent=e.target.textContent,cargoSelect.setAttribute("data-state","")}));hazardSelect.addEventListener("click",(function(){"active"===hazardSelect.getAttribute("data-state")?hazardSelect.setAttribute("data-state",""):hazardSelect.setAttribute("data-state","active")}));for(var _i3=0;_i3<hazardSelectLabels.length;_i3++)hazardSelectLabels[_i3].addEventListener("click",(function(e){hazardSelectTitle.textContent=e.target.textContent,hazardSelect.setAttribute("data-state","")}));var tempCheckbox=document.querySelector('input[type="checkbox"]'),tempBlock=document.querySelector(".input-group__temperature-row");tempCheckbox.addEventListener("click",(function(){tempCheckbox.checked?tempBlock.classList.add("input-group__temperature-row--active"):tempBlock.classList.remove("input-group__temperature-row--active")}));