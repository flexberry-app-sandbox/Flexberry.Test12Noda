import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test12-noda-test-main-l');
  this.route('i-i-s-test12-noda-test-main-e',
  { path: 'i-i-s-test12-noda-test-main-e/:id' });
  this.route('i-i-s-test12-noda-test-main-e.new',
  { path: 'i-i-s-test12-noda-test-main-e/new' });
  this.route('i-i-s-test12-noda-test-master-l');
  this.route('i-i-s-test12-noda-test-master-e',
  { path: 'i-i-s-test12-noda-test-master-e/:id' });
  this.route('i-i-s-test12-noda-test-master-e.new',
  { path: 'i-i-s-test12-noda-test-master-e/new' });
});

export default Router;
