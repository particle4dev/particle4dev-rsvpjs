Package.describe({
    summary: "RSVP.js provides simple tools for organizing asynchronous code.",
    version: "3.0.18",
    name: "particle4dev:rsvpjs",
    git: ""
});

// meteor test-packages ./
var both = ['client', 'server'];
var client = ['client'];
var server = ['server'];

Package.on_use(function(api) {
    api.versionsFrom('1.0');
    api.add_files([
        'rsvp-latest.min.js'
    ], client);
    if (typeof api.export !== 'undefined') {
    }
});
