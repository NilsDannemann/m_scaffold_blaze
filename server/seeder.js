Meteor.startup(function() {
	// Define seed
	Factory.define('CollectionItem', MyCollection, {
		field1: function() {
			return faker.hacker.verb();
		},
		field2: function() {
			return faker.hacker.verb();
		}
	});

	// Optional: Remove all before seeding 
	MyCollection.remove({});

	// Start seeding
	if (MyCollection.find({}).count() === 0) {
		_(200).times(function(n) {
			Factory.create('CollectionItem');
		});
	}
});