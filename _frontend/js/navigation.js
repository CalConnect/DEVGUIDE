/**
 * Navigation Script
 * Handles mobile menu toggle and active state highlighting
 */

(function() {
  'use strict';

  /**
   * Initialize mobile menu toggle
   */
  function initMobileMenu() {
    var menuButton = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', function() {
        var isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  /**
   * Highlight active navigation items
   */
  function initActiveNav() {
    var currentPath = window.location.pathname;

    // Sidebar navigation
    var sidebarLinks = document.querySelectorAll('.docs-nav .nav-items a');
    sidebarLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href) {
        // Normalize paths for comparison
        var linkPath = href.replace(/\/$/, '');
        var pagePath = currentPath.replace(/\/$/, '');
        if (linkPath === pagePath) {
          link.classList.add('active');
        }
      }
    });

    // Header navigation
    var headerLinks = document.querySelectorAll('nav a[href]');
    headerLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href !== '/') {
        var linkPath = href.replace(/\/$/, '');
        var pagePath = currentPath.replace(/\/$/, '');
        if (pagePath.indexOf(linkPath) === 0) {
          link.classList.add('active');
        }
      }
    });
  }

  /**
   * Initialize on DOM ready
   */
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initActiveNav();
  });
})();
