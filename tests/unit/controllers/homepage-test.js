import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:homepage', 'HomepageController', {
  // Specify the other units that are required for this test.
  needs: ['controller:questions']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
