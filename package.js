Package.describe({
  name: 'ox2:chartjs',
  summary: 'Chart.js library',
  version: '1.0.2_1',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('lib/chart.js', C);
  api.addFiles('lib/export.js', C);
  api.export('Chart');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:chartjs');
  api.addFiles('tests/oo-chartjs-tests.js');
});
