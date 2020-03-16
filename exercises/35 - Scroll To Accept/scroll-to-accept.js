const terms = document.querySelector('.terms-and-conditions');
const watch = terms.lastElementChild;
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(watch);
  }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });

ob.observe(watch);
