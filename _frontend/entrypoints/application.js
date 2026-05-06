import '../js/theme.js'
import '../js/navigation.js'

document.addEventListener('DOMContentLoaded', function() {
  // Mobile sidebar toggle (in-page button)
  var sidebarToggle = document.getElementById('mobile-sidebar-toggle');
  var sidebar = document.querySelector('.docs-nav');
  var backdrop = document.querySelector('.docs-nav-backdrop');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('mobile-open');
      if (backdrop) backdrop.classList.toggle('active');
    });
  }
  if (backdrop) {
    backdrop.addEventListener('click', function() {
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('active');
    });
  }

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
