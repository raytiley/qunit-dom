import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | qunit-dom');

test('qunit-dom assertions are available', function(assert) {
  assert.expect(6);

  assert.ok(assert.dom, 'assert.dom is available');
  assert.ok(assert.dom('.foo').includesText, 'assert.dom(...).includesText is available');

  assert.dom('#qunit').doesNotExist('rootElement is set to #ember-testing-container');

  visit('/');
  andThen(() => {
    assert.dom('#title').exists();
    assert.dom('#subtitle').doesNotExist();
    assert.dom('#title').hasText('Welcome to Ember');
  });
});
