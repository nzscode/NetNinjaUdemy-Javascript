let popupClose = document.querySelector('.popup-close');
let button = document.querySelector('button');
let popup = document.querySelector('.popup-wrapper');


button.addEventListener('click', () =>{
    popup.style.display = 'block';
})


popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})

