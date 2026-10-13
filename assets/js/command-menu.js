/*
 * Command menu (Ctrl/Cmd + J): a dependency-free port of the cmdk dialog used in
 * https://github.com/BartoszJarocki/cv (MIT, see LICENSE-cv-template).
 */
(function () {
  "use strict";

  var isMac = navigator.userAgent.indexOf("Mac") !== -1;
  var keys = document.querySelectorAll("[data-cmd-key]");
  for (var k = 0; k < keys.length; k++) keys[k].textContent = isMac ? "⌘" : "Ctrl";

  var root = document.getElementById("cmd-dialog");
  if (!root) return;

  var overlay = root.querySelector("[data-cmd-overlay]");
  var content = root.querySelector("[data-cmd-content]");
  var input = root.querySelector("[data-cmd-input]");
  var empty = root.querySelector("[data-cmd-empty]");
  var groups = Array.prototype.slice.call(root.querySelectorAll("[data-cmd-group]"));
  var items = Array.prototype.slice.call(root.querySelectorAll("[data-cmd-item]"));
  var trigger = document.querySelector("[data-cmd-trigger]");
  var closeBtn = root.querySelector("[data-cmd-close]");

  var isOpen = false;
  var active = 0;
  var lastFocus = null;
  var hideTimer = null;

  function visible() {
    return items.filter(function (it) { return !it.hidden; });
  }

  function select(index) {
    var list = visible();
    active = index;
    list.forEach(function (it, i) {
      it.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    if (list[index] && list[index].scrollIntoView) list[index].scrollIntoView({ block: "nearest" });
  }

  function filter() {
    var q = input.value.trim().toLowerCase();
    items.forEach(function (it) {
      it.hidden = q !== "" && it.textContent.toLowerCase().indexOf(q) === -1;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector("[data-cmd-item]:not([hidden])");
    });
    empty.hidden = visible().length > 0;
    select(0);
  }

  function setState(state) {
    overlay.setAttribute("data-state", state);
    content.setAttribute("data-state", state);
  }

  function open() {
    if (isOpen) return;
    clearTimeout(hideTimer);
    lastFocus = document.activeElement;
    root.hidden = false;
    setState("open");
    input.value = "";
    filter();
    document.documentElement.style.overflow = "hidden";
    isOpen = true;
    input.focus();
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    setState("closed");
    document.documentElement.style.overflow = "";
    hideTimer = setTimeout(function () { root.hidden = true; }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function toggle() {
    if (isOpen) close(); else open();
  }

  function run(item) {
    close();
    if (item.getAttribute("data-action") === "print") {
      setTimeout(function () { window.print(); }, 220);
    } else if (item.getAttribute("data-url")) {
      window.open(item.getAttribute("data-url"), "_blank", "noopener,noreferrer");
    }
  }

  document.addEventListener("keydown", function (e) {
    if ((e.key === "j" || e.key === "J") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      toggle();
      return;
    }
    if (!isOpen) return;
    var list = visible();
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (list.length) select((active + 1) % list.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (list.length) select((active - 1 + list.length) % list.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (list[active]) run(list[active]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      input.focus();
    }
  });

  input.addEventListener("input", filter);
  overlay.addEventListener("click", close);
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (trigger) trigger.addEventListener("click", toggle);

  items.forEach(function (it) {
    it.addEventListener("click", function () { run(it); });
    it.addEventListener("mousemove", function () {
      var i = visible().indexOf(it);
      if (i !== -1 && i !== active) select(i);
    });
  });
})();
