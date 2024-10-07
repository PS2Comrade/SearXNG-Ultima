document.getElementById('search-button').addEventListener('click', function() {
    let query = document.getElementById('search-box').value;
    
    // Get the stored Searx instance
    browser.storage.sync.get('searxInstance', function(result) {
        let instance = result.searxInstance || 'https://searxng.ch/';
        let searchUrl = instance + '/search?q=' + encodeURIComponent(query);
        
        // Open the search in a new tab
        browser.tabs.create({ url: searchUrl });
    });
});
