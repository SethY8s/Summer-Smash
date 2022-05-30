const startingPoint = document.querySelector('.rain-div');

const scrollOptions = {};

const scrollingDrops = new IntersectionObserver(function (
  entries,
  scrollingDrops
) {
  entries.forEach((entries) => {
    if (!entries.isIntersecting) {
      return;
    } else {
      console.log(entries);
      // entry.target.add('something');
    }
  });
},
scrollOptions);

scrollingDrops.observe(startingPoint);
