import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import RouterLoggerService from 'dummy/services/router-logger';
import LookUpRouterLoggerService from 'dummy/services/look-up-router-logger';

module('Acceptance | visit home', function (hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(function () {
    this.owner.unregister('service:router-logger');
    this.owner.register(
      'service:router-logger',
      class extends RouterLoggerService {
        log() {
          // does nothing!
        }
      }
    );
    this.owner.unregister('service:look-up-router-logger');
    this.owner.register(
      'service:look-up-router-logger',
      class extends LookUpRouterLoggerService {
        log() {
          // does nothing!
        }
      }
    );
  });

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
