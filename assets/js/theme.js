// Light/dark theme toggle. Light is the default; the choice is saved in localStorage.
(function () {
  var root = document.documentElement;
  var KEY = "theme";

  function get() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function set(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
  }
  function apply(dark) {
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  // Runs in <head> before the page paints, so there is no light flash.
  apply(get() === "dark");

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    function sync() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.textContent = dark ? "☀" : "☾";
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("title", btn.getAttribute("aria-label"));
    }
    btn.hidden = false;
    sync();
    btn.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") !== "dark";
      apply(dark);
      set(dark ? "dark" : "light");
      sync();
    });
  });
})();
