browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "updateManifest") {
    const manifest = browser.runtime.getManifest();
    manifest.chrome_settings_overrides.search_provider.search_url = request.searchUrl;
    manifest.chrome_settings_overrides.search_provider.suggest_url = request.suggestUrl;

    // Update the manifest.json file
    browser.runtime.sendMessage({ action: "updateManifestFile", manifest });
  }
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "updateManifestFile") {
    const manifest = request.manifest;
    const json = JSON.stringify(manifest, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Update the manifest.json file
    browser.runtime.getBackgroundPage().fetch(url)
      .then(response => response.text())
      .then(text => {
        const manifestFile = browser.runtime.getManifestFile();
        manifestFile.write(text);
      });
  }
});
