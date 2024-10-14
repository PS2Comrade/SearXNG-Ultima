document.addEventListener("DOMContentLoaded", function () {
  const searchUrlInput = document.getElementById("search-url");
  const suggestUrlInput = document.getElementById("suggest-url");
  const saveButton = document.querySelector("button[type='submit']");

  saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    const searchUrl = searchUrlInput.value;
    const suggestUrl = suggestUrlInput.value;

    // Update the manifest.json file
    browser.runtime.sendMessage({ action: "updateManifest", searchUrl, suggestUrl });
  });
});
