import '../js/theme.js'
import '../js/navigation.js'

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      this.classList.toggle('open');
      var subsection = this.nextElementSibling;
      if (subsection) subsection.classList.toggle('collapsed');
    });
  });
});
