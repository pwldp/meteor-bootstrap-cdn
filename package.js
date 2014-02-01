Package.describe({
        summary: "Load latest Twitter Bootstrap from Bootstrap CDN"
});

Package.on_use(function (api){
        api.use('jquery', 'client');
        api.add_files('load_bootstrap_from_cdn.js', 'client');
});
