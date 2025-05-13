(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('fast');
        } else {
            $('.back-to-top').fadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);


// Custom JavaScript 

// Copyright year update
document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  var copyrightElement = document.querySelector('.footer-copyright');
  if (copyrightElement) {
      copyrightElement.innerHTML = '&copy; ' + currentYear + ' <a class="text-white border-bottom" href="#">SKandA</a>. All Rights Reserved. Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a>';
  }
});


    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
        

    // Function to get a cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf(name + "=") === 0) {
                return cookie.substring(name.length + 1);
            }
        }
        return "";
    }

    // Function to check cookie consent
    function checkCookieConsent() {
        const consent = getCookie("cookieConsent");
        if (!consent) {
            document.getElementById("cookie-banner").style.display = "block";
            document.getElementById("page-overlay").style.display = "block";
        }
    }

    // Function to accept cookies
    function acceptCookies() {
        setCookie("cookieConsent", "accepted", 365);
        document.getElementById("cookie-banner").style.display = "none";
        document.getElementById("page-overlay").style.display = "none";
    }

    // Function to decline cookies
    function declineCookies() {
        setCookie("cookieConsent", "declined", 365);
        document.getElementById("cookie-banner").style.display = "none";
        document.getElementById("page-overlay").style.display = "none";
    }

    // Check cookie consent on page load
    window.onload = checkCookieConsent;

    function toggleTopbarSocials() { 
      let topbarSeeSocials = document.getElementById("topbar-socials")
      if (topbarSeeSocials.style.display === "none"){
        topbarSeeSocials.style.display = "block"
      } else {
        topbarSeeSocials.style.display = "none"
      }
      let topbarBtnSeeSocials = document.getElementById("topbar-see-socials")
      if (topbarBtnSeeSocials.style.display ==="none"){
        topbarBtnSeeSocials.style.display === "none"
      } else {
        topbarBtnSeeSocials.style.display = "block"
      }
    }
