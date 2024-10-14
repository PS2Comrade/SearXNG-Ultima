browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "updateSearchProvider") {
    // Get the stored values from browser storage
    browser.storage.local.get(["searchUrl", "suggestUrl"]).then(function (result) {
      const searchUrl = result.searchUrl;
      const suggestUrl = result.suggestUrl;

      // Update the search provider settings
      browser.search.update({
        engine: "SearXNG",
        alias: "searxng",
        searchUrl: searchUrl,
        suggestUrl: suggestUrl
      });
    });
  }
});
