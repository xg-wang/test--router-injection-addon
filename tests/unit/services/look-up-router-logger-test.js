import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | look-up-router-logger', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:look-up-router-logger');
    assert.ok(service);
  });
});
