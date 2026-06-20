// Navbar scroll state
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// Mobile hamburger menu
var hamburger = document.getElementById("hamburger");
var navLinks  = document.getElementById("nav-links");

hamburger.addEventListener("click", function() {
  var isOpen = navLinks.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll(".nav__link").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", function(e) {
  if (!navbar.contains(e.target) && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Active nav link
var sections   = document.querySelectorAll("main section[id]");
var navLinkEls = document.querySelectorAll(".nav__link");

var sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var id = entry.target.id;
      navLinkEls.forEach(function(link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    }
  });
}, { rootMargin: "-64px 0px -55% 0px", threshold: 0 });

sections.forEach(function(s) { sectionObserver.observe(s); });

// Scroll reveal
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) return;
    var el = entry.target;
    var parent = el.parentElement;
    var siblings = parent ? Array.from(parent.querySelectorAll(".reveal")) : [];
    var index = siblings.indexOf(el);
    el.style.transitionDelay = Math.min(index * 60, 300) + "ms";
    el.classList.add("visible");
    revealObserver.unobserve(el);
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(function(el) {
  revealObserver.observe(el);
});

// Project image sliders
(function() {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".project-slider").forEach(function(slider) {
    var track       = slider.querySelector(".project-slider__track");
    var placeholder = slider.querySelector(".project-slider__placeholder");
    var prevBtn     = slider.querySelector(".project-slider__arrow--prev");
    var nextBtn     = slider.querySelector(".project-slider__arrow--next");
    var dotsEl      = slider.querySelector(".project-slider__dots");
    var slides      = Array.from(track.querySelectorAll(".project-slider__slide"));
    var pending     = slides.length;

    if (pending === 0) { activate([]); return; }

    slides.forEach(function(slide) {
      var img = slide.querySelector("img");
      if (!img || img.complete) {
        pending--;
        if (pending === 0) activate(collect());
        return;
      }
      function resolve() {
        pending--;
        if (pending === 0) activate(collect());
      }
      img.addEventListener("load",  resolve, { once: true });
      img.addEventListener("error", resolve, { once: true });
    });

    function collect() {
      return Array.from(track.querySelectorAll(".project-slider__slide"));
    }

    function activate(active) {
      if (active.length === 0) {
        track.hidden              = true;
        prevBtn.hidden            = true;
        nextBtn.hidden            = true;
        dotsEl.hidden             = true;
        placeholder.style.display = "flex";
        return;
      }
      if (active.length === 1) {
        prevBtn.hidden = true;
        nextBtn.hidden = true;
        dotsEl.hidden  = true;
        return;
      }

      // 2+ slides: full carousel
      var current  = 0;
      var autoId   = null;
      var resumeId = null;
      var hovered  = false;

      active.forEach(function(_, i) {
        var dot = document.createElement("button");
        dot.className = "project-slider__dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Slide " + (i + 1));
        dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
        dot.addEventListener("click", function() { goTo(i); scheduleResume(); });
        dotsEl.appendChild(dot);
      });

      function goTo(idx) {
        current = idx;
        track.style.transform = "translateX(-" + (idx * 100) + "%)";
        dotsEl.querySelectorAll(".project-slider__dot").forEach(function(d, i) {
          d.setAttribute("aria-selected", i === idx ? "true" : "false");
        });
      }

      function next() { goTo((current + 1) % active.length); }
      function prev() { goTo((current - 1 + active.length) % active.length); }

      function startAuto() {
        if (reducedMotion) return;
        autoId = setInterval(function() { if (!hovered) next(); }, 4000);
      }
      function stopAuto() { clearInterval(autoId); autoId = null; }
      function scheduleResume() {
        stopAuto();
        clearTimeout(resumeId);
        resumeId = setTimeout(startAuto, 6000);
      }

      nextBtn.addEventListener("click", function() { next(); scheduleResume(); });
      prevBtn.addEventListener("click", function() { prev(); scheduleResume(); });

      slider.addEventListener("mouseenter", function() { hovered = true; });
      slider.addEventListener("mouseleave", function() { hovered = false; });

      var touchStartX = 0;
      slider.addEventListener("touchstart", function(e) {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });
      slider.addEventListener("touchend", function(e) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) >= 50) {
          if (dx < 0) next(); else prev();
          scheduleResume();
        }
      }, { passive: true });

      slider.setAttribute("tabindex", "0");
      slider.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft")  { prev(); scheduleResume(); e.preventDefault(); }
        if (e.key === "ArrowRight") { next(); scheduleResume(); e.preventDefault(); }
      });

      startAuto();
    }
  });
})();
