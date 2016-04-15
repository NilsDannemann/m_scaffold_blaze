MyCollection = new Mongo.Collection("mycollection");

var Schemas = {};

Schemas.CollectionItem = new SimpleSchema({
	field1: {
		type: String,
		label: "Field1"
	},
	field2: {
		type: String,
		label: "Field2"
	}
});