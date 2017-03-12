// create observer
let observer = new IntersectionObserver(onChange);

function onChange(changes) {
  changes.forEach(change => {
    // take image url from `data-src` attribute
    change.target.src = change.target.dataset.src;

    // stop observing the current target
    observer.unobserve(change.target);
  });
}

// convert node list to array
const imgs = [ ...document.querySelectorAll('[data-src]') ];

// observe each image
imgs.forEach(img => observer.observe(img));
