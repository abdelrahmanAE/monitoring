// --- Page Navigation Logic ---
const mainContent = document.getElementById("main-content");
const cpPage = document.getElementById("cp-page");
const oopPage = document.getElementById("oop-page");

/**
 * Switches the view to a specific sub-page.
 * @param {string} pageId - The ID of the page to show ('cp-page' or 'oop-page').
 */
function showPage(pageId) {
  // Hide all pages
  mainContent.classList.add("hidden");
  cpPage.classList.add("hidden");
  oopPage.classList.add("hidden");
  closeModal(); // Ensure main modal is closed
  closeLanguageSelection(); // Ensure language modal is closed

  // Show the requested page
  const pageToShow = document.getElementById(pageId);
  if (pageToShow) {
    pageToShow.classList.remove("hidden");
    // Scroll to the top of the main content area for a clean page transition
    window.scrollTo(0, 0);
  }
}

/**
 * Switches the view back to the main hub.
 */
function showMainPage() {
  // Hide all sub-pages
  cpPage.classList.add("hidden");
  oopPage.classList.add("hidden");
  closeModal(); // Ensure main modal is closed
  closeLanguageSelection(); // Ensure language modal is closed

  // Show the main content
  mainContent.classList.remove("hidden");
  // Scroll to the top of the main content area
  window.scrollTo(0, 0);
}

// --- General Message Modal Logic (Replaces alert()) ---
const modal = document.getElementById("messageModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

/**
 * Shows a custom modal with a title and message.
 * @param {string} title - The title of the message.
 * @param {string} body - The main content of the message.
 */
function showModal(title, body) {
  // Ensure the language selection modal is closed when showing the final destination modal
  closeLanguageSelection();

  modalTitle.textContent = title;
  modalBody.textContent = body + " (This link is currently a placeholder.)";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

/**
 * Closes the general message modal.
 */
function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// --- Language Selection Modal Logic (New for OOP) ---
const langModal = document.getElementById("languageSelectionModal");

/**
 * Shows the specific modal for C#/Java/C++ selection.
 */
function showLanguageSelection() {
  langModal.classList.remove("hidden");
  langModal.classList.add("flex");
}

/**
 * Closes the language selection modal.
 */
function closeLanguageSelection() {
  langModal.classList.add("hidden");
  langModal.classList.remove("flex");
}


// --- Arabic Quote Rotator (10 quotes, change every 5 seconds) ---
document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "لا تتوقف عندما تتعب، توقف عندما تنتهي.",
    "من جدَّ في مسعاه، نالَ مبتغاه، فالعزم طريقُ الوصول، والمثابرةُ مفتاحُ النجاح.",
    "المعرفة ليست وجهة؛ إنها رحلة تستمتع بها كل يوم.",
    "ثابر قليلاً أكثر — النجاح أقرب مما تظن.",
    "اخطاؤك اليوم هي دروسك الغنية غدًا.",
    "ابدأ الآن — أفضل وقت كان بالأمس، ثاني أفضل وقت هو الآن.",
    "استمرار سعيك شئ جميل و لي معنى ان لفرق بين الانسان الناجح والآخرين هو ليس نقص القوّة، ولا نقص المعرفة، إنَّما نقص الإرادة خليك مكمل ديمأ مهما كانت التحديات",
    "You Are Competitive Programmer و دي لوحدها كفايه",
    "لا تيأس ما دامت هناك فرصة جديدة ومحاولة أخرى، فبالعزيمة والإصرار تستطيع أن تُتقن",
    "النجاح هو مجموع الجهود الصغيرة المكررة يومياً",
  ];

  let idx = 0;
  const el = document.getElementById("arabic-quote");
  const countEl = document.getElementById("quote-count");

  if (!el) {
    console.debug("Quote rotator: element #arabic-quote not found");
    return;
  }

  function update() {
    // Instant (silent) swap — no fade class applied
    el.textContent = quotes[idx];
    if (countEl) countEl.textContent = `${idx + 1}/${quotes.length}`;
    idx = (idx + 1) % quotes.length;
  }

  // set initial (if not already set in HTML)
  if (!el.textContent || el.textContent.trim().length === 0) {
    el.textContent = quotes[0];
    if (countEl) countEl.textContent = `1/${quotes.length}`;
    idx = 1;
  }

  // start rotation: switch every 8 seconds (8000 ms)
  setInterval(update, 8000);
});
