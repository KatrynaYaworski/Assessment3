let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');
let additionalInfoButton = document.querySelector(".additional-info-button")


 color.addEventListener('click', () => {alert('My favorite color is lilac.')
});
 place.addEventListener('click', () => {alert('My favorite place is anywhere with my family.')
});
 ritual.addEventListener('click', () => {alert('My favorite ritual is daily reflection.')
});
additionalInfoButton.addEventListener('click', () => {
    const infoClasses = document.querySelector(".additional-info").classList
    infoClasses.toggle("hidden")
    if(infoClasses.contains('hidden')){
        additionalInfoButton.textContent = "More about me!"
    } else {
        additionalInfoButton.textContent = "Hide additional info!"
    }
})