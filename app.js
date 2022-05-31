// const startingPoint = document.querySelector('.band-student');
// const endingPoint = document.querySelector('.sponsors');

// const scrollOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: '-350px',
// };

// const scrollingDrops = new IntersectionObserver(function (
//   entries,
//   scrollingDrops
// ) {
//   entries.forEach((entries) => {
//     if (!entries.isIntersecting) {
//       return;
//     } else {
//       console.log(entries);
//       const animationDiv = document.querySelector('.rain-div');
//       animationDiv.classList.add('rain-div-animation');
//     }
//   });
// },
// scrollOptions);

// const dropsEnd = new IntersectionObserver(function (entries, dropsEnd) {
//   entries.forEach((entries) => {
//     if (!entries.isIntersecting) {
//       return;
//     } else {
//       console.log(entries);
//       const animationDiv = document.querySelector('.rain-div');
//       animationDiv.classList.remove('rain-div-animation');
//     }
//   });
// }, scrollOptions);

// scrollingDrops.observe(startingPoint);
// dropsEnd.observe(endingPoint);
