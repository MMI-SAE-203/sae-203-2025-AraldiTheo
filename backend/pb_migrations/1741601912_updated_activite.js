/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text890129252",
    "max": 0,
    "min": 0,
    "name": "Nom_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4150093999",
    "hidden": false,
    "id": "relation543480620",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "animateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // remove field
  collection.fields.removeById("date2862495610")

  // remove field
  collection.fields.removeById("text890129252")

  // remove field
  collection.fields.removeById("relation543480620")

  return app.save(collection)
})
