document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-query').value;
    if (query) {
        const searxInstance = "https://your-searxng-instance/search"; // Replace with your SearxNG URL
        const searchUrl = `${searxInstance}?q=${encodeURIComponent(query)}`;
        // Open the search in a new tab
        browser.tabs.create({ url: searchUrl });
    }
});
