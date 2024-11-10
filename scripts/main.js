/*-- ANIMATE REVEAL --*/

/*IMG ARCADE*/
const arcadeElement = document.querySelector('.Arcade');

arcadeElement.style.opacity = 0;
arcadeElement.style.transform = 'translateY(-40px)';

setTimeout(() => {
    // Transition styles
    arcadeElement.style.transition = 'opacity 2s, transform 2s';
    arcadeElement.style.opacity = 1;
    arcadeElement.style.transform = 'translateY(0)';
}, 1200);
