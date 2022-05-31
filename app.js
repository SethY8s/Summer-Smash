// const startingPoint = document.querySelector('.band-student');
const startingPoint = document.querySelector('.at-Nina-June');
// const endingPoint = document.querySelector('.scroll-endpoint');

const scrollOptions = {
  root: null,
  threshold: .77,
  rootMargin: "-180px"
};

// const endOptions = {
//     root: null,
//     threshold: 0,
//     rootMargin: "-460px"
//   };

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
    }
  });
},
scrollOptions);

// const dropsEnd = new IntersectionObserver(function (entries, dropsEnd) {
//   entries.forEach((entries) => {
//     if (!entries.isIntersecting) {
//       return;
//     } else {
//       console.log(entries);
//       const animationDiv = document.querySelector('.rain-div');
//       animationDiv.classList.remove('rain-div-animation');
//       animationDiv.classList.add('rain-div-end');
//     }
//   });
// }, endOptions);

scrollingDrops.observe(startingPoint);
// dropsEnd.observe(endingPoint);
