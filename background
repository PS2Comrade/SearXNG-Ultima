// Listen for web requests and redirect to the stored Searx instance
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return new Promise((resolve) => {
      browser.storage.sync.get('searxInstance', function(data) {
        let instance = data.searxInstance || 'https://searx.example.com';
        let query = new URL(details.url).searchParams.get('q');

        if (query) {
          let redirectUrl = `${instance}/search?q=${encodeURIComponent(query)}`;
          resolve({ redirectUrl });
        } else {
          resolve({});
        }
      });
    });
  },
  { urls: ["*://www.google.com/search*", "*://duckduckgo.com/*", "*://www.bing.com/search*"] },
  ["blocking"]
);
