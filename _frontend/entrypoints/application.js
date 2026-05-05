import '../js/theme.js'
import '../js/navigation.js'

document.addEventListener('DOMContentLoaded', function() {
  // Active header nav — highlight Standards/Resources/About
  var currentPath = window.location.pathname;
  document.querySelectorAll('[data-nav-section]').forEach(function(el) {
    var section = el.getAttribute('data-nav-section');
    var isActive = false;
    if (section === 'standards') {
      isActive = /^\/(icalendar|caldav|carddav|scheduling|time-zones|itip|imip|tasks|publishing|jscalendar|vcard|data-model|calendar-spam)/.test(currentPath);
    } else if (section === 'resources') {
      isActive = currentPath.indexOf('/resources/') === 0;
    } else if (section === 'about') {
      isActive = currentPath === '/about/';
    }
    if (isActive) {
      el.classList.add('nav-link-active');
    }
  });
});
