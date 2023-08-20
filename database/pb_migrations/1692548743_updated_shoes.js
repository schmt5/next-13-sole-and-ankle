/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("802beb66ffwegtg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "da2cpbuy",
    "name": "numOfColors",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("802beb66ffwegtg")

  // remove
  collection.schema.removeField("da2cpbuy")

  return dao.saveCollection(collection)
})
