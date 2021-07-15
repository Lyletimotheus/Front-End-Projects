// 1. Set up the 'options' object
const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
};

// 2. Elements that are going to be observered needs to be in a Nodelist
const targetElements = document.querySelectorAll('img');

// 3. Create the 'observer' Object
const observer = new IntersectionObserver((entries, observer) => {
  // 3.1 Run a 'forEach' to check when each 'targetElement' 'isIntersecting'
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-slide-in');
    }
  });
}, options);

// 4. RUn the 'observer' function to loop through and observe each 'targetElement'
targetElements.forEach((el) => {
  observer.observe(el);
});
