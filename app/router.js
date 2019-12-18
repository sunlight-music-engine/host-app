import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '' }, function() {
    this.mount('sunlight-browser-engine', { as: 'browser', path: '/' });
    this.mount('sunlight-album-engine', { as: 'album', path: '/album' });
  });
});
