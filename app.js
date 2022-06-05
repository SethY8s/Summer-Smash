const startingPoint = document.querySelector('.at-Nina-June');

const scrollOptions = {
  root: null,
  threshold: 0.77,
  rootMargin: '-100px',
};

const scrollingDrops = new IntersectionObserver(function (
  entries,
  scrollingDrops
) {
  entries.forEach((entries) => {
    if (!entries.isIntersecting) {
      return;
    } else {
      console.log(entries);

      const animationDiv = document.querySelector('.rain-div');
      animationDiv.classList.add('rain-div-animation');

      const transparencyAnimation = document.querySelector(
        '.background-rain-div'
      );
      transparencyAnimation.classList.add('background-rain-div-after');

      const fallingAnimation = document.querySelector('.fallingBackGround');
      fallingAnimation.classList.add('fallingBackGroundEnd');
    }
  });
},
scrollOptions);

scrollingDrops.observe(startingPoint);

const onLoad = () => {
  document.getElementById('click-for-scroll-animation').click();
};

if (window.screen.width > 900) {
  setTimeout(onLoad, 1750);
}
