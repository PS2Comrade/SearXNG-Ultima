document.addEventListener("DOMContentLoaded", function () {
  const searchUrlInput = document.getElementById("search-url");
  const suggestUrlInput = document.getElementById("suggest-url");
  const saveButton = document.querySelector("button[type='submit']");

  saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    const searchUrl = searchUrlInput.value;
    const suggestUrl = suggestUrlInput.value;

    // Update the search provider settings
    browser.storage.local.set({
      searchUrl: searchUrl,
      suggestUrl: suggestUrl
    });

    // Send a message to the background script to update the search provider
    browser.runtime.sendMessage({ action: "updateSearchProvider" });
  });
});
