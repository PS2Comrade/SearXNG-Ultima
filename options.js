document.addEventListener("DOMContentLoaded", function () {
  const searchUrlInput = document.getElementById("search-url");
  const suggestUrlInput = document.getElementById("suggest-url");
  const saveButton = document.querySelector("button[type='submit']");

  saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    const searchUrl = searchUrlInput.value;
    const suggestUrl = suggestUrlInput.value;

    // Store the updated values in browser storage
    browser.storage.local.set({
      searchUrl: searchUrl,
      suggestUrl: suggestUrl
    });

    // Update the search provider settings
    browser.runtime.sendMessage({ action: "updateSearchProvider" });
  });
});
