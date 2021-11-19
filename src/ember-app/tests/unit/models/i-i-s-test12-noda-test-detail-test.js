import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test12-noda-test-detail', 'Unit | Model | i-i-s-test12-noda-test-detail', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test12-noda-test-detail',
    'model:i-i-s-test12-noda-test-main',
    'model:i-i-s-test12-noda-test-master',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
