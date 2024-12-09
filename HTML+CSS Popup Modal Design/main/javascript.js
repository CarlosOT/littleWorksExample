const exitPopup = document.getElementById('exit-popup');
const exitPopupClose = document.getElementById('exit-popup-close');

const hideExitPopup = () => exitPopup.style.display = "none";
const showExitPopup = () => exitPopup.style.display = "block";

document.addEventListener('mouseleave', showExitPopup);
exitPopupClose.addEventListener('click', hideExitPopup);