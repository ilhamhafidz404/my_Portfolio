// tooltip
const myTooltipEl = document.getElementById('myTooltip1');
const myTooltipEl2 = document.getElementById('myTooltip2');
const myTooltipEl3 = document.getElementById('myTooltip3');
const myTooltipEl4 = document.getElementById('myTooltip4');
const tooltip = new bootstrap.Tooltip(myTooltipEl);
const tooltip2 = new bootstrap.Tooltip(myTooltipEl2);
const tooltip3 = new bootstrap.Tooltip(myTooltipEl3);
const tooltip4 = new bootstrap.Tooltip(myTooltipEl4);

myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
});

tooltip.hide()

// lightbox

lightbox.option({
    'resizeDuration': 500,
    'wrapAround': false,
    'disableScrolling': true,
    'albumLabel': "Foto %1 dari %2"
  });

//tilt
const tilt = $('.js-tilt').tilt({
  maxTilt:        20,
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  scale:          1.07,      // 2 = 200%, 1.5 = 150%, etc..
  speed:          300,    // Speed of the enter/exit transition.
  transition:     true,   // Set a transition on enter/exit.
  disableAxis:    null,   // What axis should be disabled. Can be X or Y.
  reset:          false,   // If the tilt effect has to be reset on exit.
  glare:          false,  // Enables glare effect
  maxGlare:       1       // From 0 - 1.
}); 