/* Directory page: renders shop cards from data/shops.js and wires up
   the search box + category chips. No frameworks, no storage. */
(function () {
  var grid = document.getElementById("shop-grid");
  var searchInput = document.getElementById("shop-search");
  var chipRow = document.getElementById("chip-row");
  var countEl = document.getElementById("results-count");
  if (!grid || typeof SHOPS === "undefined") return;

  var activeCategory = "All";
  var query = "";

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render() {
    var visible = SHOPS.filter(function (shop) {
      var matchesCategory = activeCategory === "All" || shop.category === activeCategory;
      var haystack = (shop.name + " " + shop.category + " " + shop.blurb).toLowerCase();
      var matchesQuery = !query || haystack.indexOf(query) !== -1;
      return matchesCategory && matchesQuery;
    });

    countEl.textContent =
      visible.length === 1 ? "1 listing" : visible.length + " listings";

    if (!visible.length) {
      grid.innerHTML =
        '<div class="results-empty" style="grid-column:1/-1">' +
        "<p>No shops match your search yet.</p>" +
        '<p><a href="for-businesses.html">Run a shop here? Get listed →</a></p>' +
        "</div>";
      return;
    }

    grid.innerHTML = visible
      .map(function (shop) {
        var phoneRow = shop.phone
          ? '<p class="shop-card__meta">📞 <a href="tel:' + escapeHtml(shop.phone) + '">' +
            escapeHtml(shop.phone) + "</a></p>"
          : '<p class="shop-card__meta">Phone to be added</p>';

        var actions = "";
        if (shop.whatsapp) {
          actions =
            '<div class="shop-card__actions">' +
            '<a class="btn btn--whatsapp btn--small" href="https://wa.me/' +
            encodeURIComponent(shop.whatsapp) +
            '" target="_blank" rel="noopener">Message on WhatsApp</a></div>';
        }

        return (
          '<article class="shop-card">' +
          '<div class="shop-card__head"><h3>' + escapeHtml(shop.name) + "</h3>" +
          '<span class="unit-plate">' + escapeHtml(shop.unit) + "</span></div>" +
          '<span class="shop-card__cat">' + escapeHtml(shop.category) + "</span>" +
          '<p class="shop-card__meta">' + escapeHtml(shop.blurb) + "</p>" +
          phoneRow +
          actions +
          "</article>"
        );
      })
      .join("");
  }

  // Build category chips: "All" + the categories defined in data/shops.js
  ["All"].concat(SHOP_CATEGORIES).forEach(function (cat) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = cat;
    btn.setAttribute("aria-pressed", cat === "All" ? "true" : "false");
    btn.addEventListener("click", function () {
      activeCategory = cat;
      chipRow.querySelectorAll(".chip").forEach(function (c) {
        c.setAttribute("aria-pressed", c === btn ? "true" : "false");
      });
      render();
    });
    chipRow.appendChild(btn);
  });

  searchInput.addEventListener("input", function () {
    query = searchInput.value.trim().toLowerCase();
    render();
  });

  render();
})();
