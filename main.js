!(function () {
  var e = {
      930: function () {
        const e = document.querySelector(".subscribe-add"),
          t = document.querySelector(".form-container"),
          s = document.querySelector(".form-container-change"),
          i = t.querySelector(".subscribe-form"),
          n = s.querySelector(".subscribe-form-change"),
          d = s.querySelector(".field-short-description"),
          c = s.querySelector(".field-detailed-description"),
          o = s.querySelector(".subscribe-cancel"),
          a = s.querySelector(".subscribe-ok"),
          r = i.querySelector(".subscribe-cancel"),
          l = i.querySelector(".subscribe-ok"),
          u = document.querySelector(".tickets-block"),
          h = document.querySelector(".form-container-delete"),
          b = document.querySelector(".subscribe-form-delete"),
          p = b.querySelector(".subscribe-cancel"),
          y = b.querySelector(".subscribe-ok");
        let v;
        (window.onload = function () {
          !(async function () {
            try {
              const e = await fetch("http://localhost:7070/tickets");
              if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`);
              const t = await e.json();
              return (
                console.log("Received tickets:", t),
                t.forEach((e) => {
                  let t = document.createElement("div");
                  t.classList.add("ticket-block"),
                    t.setAttribute("uuid", e.id),
                    (t.innerHTML =
                      '\n      <div class="short-part">\n          <input name="state" class="state" type="checkbox">\n          <span class="short-description-ticket">\n            <span class="short-description"></span>\n            <span class="date"> 12.04.2024 15:26</span>\n          </span>\n          <button class="delete ticket-btn"></button>\n          <button class="change ticket-btn"></button>\n      </div>\n      <div class="full-part">\n        <span class="full-description"></span>\n      </div>'),
                    (t.childNodes[1].childNodes[3].childNodes[1].textContent =
                      e.name),
                    (t.childNodes[3].childNodes[1].textContent = e.description),
                    (t.childNodes[1].childNodes[1].checked = e.state),
                    u.appendChild(t);
                }),
                document.querySelectorAll(".ticket-block").forEach((e) => {
                  e.addEventListener("click", (t) => {
                    t.target.classList.contains("short-part") &&
                      e.childNodes[3].classList.toggle("visible"),
                      t.target.classList.contains("change") &&
                        ((s.style.visibility = "visible"),
                        s.classList.remove("hidden"),
                        (v =
                          t.target.parentNode.parentNode.getAttribute("uuid")),
                        (d.value =
                          t.target.parentNode.childNodes[3].childNodes[1].textContent),
                        (c.value =
                          t.target.parentNode.parentNode.childNodes[3].childNodes[1].textContent)),
                      o.addEventListener("click", () => {
                        s.classList.contains("hidden") ||
                          ((s.style.visibility = "hidden"),
                          s.classList.add("hidden"));
                      }),
                      p.addEventListener("click", () => {
                        h.classList.contains("hidden") ||
                          ((h.style.visibility = "hidden"),
                          h.classList.add("hidden"));
                      }),
                      a.addEventListener("click", () => {
                        !s.classList.contains("hidden") &&
                          s.childNodes[1].childNodes[5].textContent &&
                          s.childNodes[1].childNodes[9].textContent &&
                          ((s.style.visibility = "hidden"),
                          s.classList.add("hidden"));
                      }),
                      y.addEventListener("click", () => {
                        h.classList.contains("hidden") ||
                          ((h.style.visibility = "hidden"),
                          h.classList.add("hidden"));
                      }),
                      t.target.classList.contains("delete") &&
                        ((h.style.visibility = "visible"),
                        h.classList.remove("hidden"),
                        (v =
                          t.target.parentNode.parentNode.getAttribute("uuid")));
                  });
                }),
                t
              );
            } catch (e) {
              throw (console.error("Error fetching tickets:", e), e);
            }
          })();
        }),
          i.addEventListener("submit", (e) => {
            e.preventDefault();
            const t = new FormData(i);
            t.append("state", "");
            const s = new XMLHttpRequest();
            (s.onreadystatechange = function () {
              s.readyState;
            }),
              s.open("POST", "http://localhost:7070"),
              s.send(t),
              i.reset(),
              location.reload();
          }),
          n.addEventListener("submit", (e) => {
            e.preventDefault();
            const t = new FormData(n);
            t.append("uuid", v);
            const s = new XMLHttpRequest();
            (s.onreadystatechange = function () {
              s.readyState;
            }),
              s.open("PUT", "http://localhost:7070"),
              s.send(t),
              n.reset(),
              location.reload();
          }),
          b.addEventListener("submit", (e) => {
            e.preventDefault();
            const t = new XMLHttpRequest();
            (t.onreadystatechange = function () {
              t.readyState;
            }),
              t.open("DELETE", `http://localhost:7070?uuid=${v}`),
              t.send(),
              b.reset(),
              location.reload();
          }),
          l.addEventListener("click", () => {
            t.classList.contains("hidden") ||
              ((t.style.visibility = "hidden"), t.classList.add("hidden"));
          }),
          a.addEventListener("click", () => {
            s.classList.contains("hidden") ||
              ((s.style.visibility = "hidden"), s.classList.add("hidden"));
          }),
          e.addEventListener("click", () => {
            t.classList.contains("hidden") &&
              ((t.style.visibility = "visible"), t.classList.remove("hidden"));
          }),
          r.addEventListener("click", () => {
            t.classList.contains("hidden") ||
              ((t.style.visibility = "hidden"), t.classList.add("hidden")),
              s.classList.contains("hidden") ||
                ((s.style.visibility = "hidden"), s.classList.add("hidden")),
              h.classList.contains("hidden") ||
                ((t.style.visibility = "hidden"), t.classList.add("hidden"));
          });
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var d = (t[i] = { exports: {} });
    return e[i](d, d.exports, s), d.exports;
  }
  (s.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return s.d(t, { a: t }), t;
  }),
    (s.d = function (e, t) {
      for (var i in t)
        s.o(t, i) &&
          !s.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      s(930);
    })();
})();
