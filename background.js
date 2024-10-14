browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "updateManifest") {
    const manifest = browser.runtime.getManifest();
    manifest.chrome_settings_overrides.search_provider.search_url = request.searchUrl || "https://search.demoniak.ch/search?q={searchTerms}";
    manifest.chrome_settings_overrides.search_provider.suggest_url = request.suggestUrl || "https://search.demoniak.ch/autocompleter?q={searchTerms}";

    // Update the manifest.json file
    browser.runtime.sendMessage({ action: "updateManifestFile", manifest });
  }
});
