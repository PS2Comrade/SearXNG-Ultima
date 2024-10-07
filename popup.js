// Load the saved instance URL when the popup opens
document.addEventListener('DOMContentLoaded', function() {
    browser.storage.local.get('searxInstance').then(result => {
        document.getElementById('instance-url').value = result.searxInstance || 'https://searxng.ch';
    });
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-query').value;
    const instanceUrl = document.getElementById('instance-url').value;

    // Save the instance URL
    browser.storage.local.set({ searxInstance: instanceUrl });

    if (query) {
        const searchUrl = `${instanceUrl}/search?q=${encodeURIComponent(query)}`;
        // Open the search in a new tab
        browser.tabs.create({ url: searchUrl });
    }
});
