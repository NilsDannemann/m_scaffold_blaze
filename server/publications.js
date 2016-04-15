Meteor.publish('MyCollection', function() {
	// Simulate slow Connection
	Meteor._sleepForMs(1000);
	// Publish Collection
	return MyCollection.find();
});