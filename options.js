// Load the stored instance
browser.storage.sync.get('searxInstance', function(result) {
    document.getElementById('instance-input').value = result.searxInstance || 'https://searxng.ch/';
});

// Save the instance when the user clicks "Save"
document.getElementById('save-button').addEventListener('click', function() {
    let instance = document.getElementById('instance-input').value;
    
    // Store the instance
    browser.storage.sync.set({ searxInstance: instance }, function() {
        alert('Searx instance saved!');
    });
});
