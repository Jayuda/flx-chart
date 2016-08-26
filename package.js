Package.describe({
    name: 'jayuda:flx-chart',
    version: '0.0.1',
    summary: "Simple chart.js in meteor.",
    git: 'https://github.com/Jayuda/flx-chart',
    documentation: 'README.md'
});

Package.onUse(function(api){
    api.versionsFrom('1.1.0.2');
    api.use([
        'chart:chart@1.0.1-beta.4'
    ]);
    api.imply('templating');
    api.addAssets([
        'client/chart.html',
        'client/chart.js'
    ], 'client');
});
