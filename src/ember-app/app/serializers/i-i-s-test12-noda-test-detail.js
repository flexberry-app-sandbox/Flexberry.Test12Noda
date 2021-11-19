import { Serializer as testDetailSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test12-noda-test-detail';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(testDetailSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
