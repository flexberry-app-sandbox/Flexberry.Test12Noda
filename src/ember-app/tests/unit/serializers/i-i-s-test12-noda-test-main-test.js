import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test12-noda-test-main', 'Unit | Serializer | i-i-s-test12-noda-test-main', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test12-noda-test-main',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test12-noda',

    'model:i-i-s-test12-noda-test-detail',
    'model:i-i-s-test12-noda-test-main',
    'model:i-i-s-test12-noda-test-master',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
