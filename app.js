const startingPoint = document.querySelector('.at-Nina-June');

const scrollOptions = {
  root: null,
  threshold: 0.77,
  rootMargin: '-220px',
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

  const thingy = document.querySelector('.background-rain-div');
  thingy.classList.add('background-rain-div-after');

  const thingyThing = document.querySelector('.finalBackGround');
  thingyThing.classList.add('finalBackGroundEnd');

  }
    });
},
scrollOptions);

scrollingDrops.observe(startingPoint);
