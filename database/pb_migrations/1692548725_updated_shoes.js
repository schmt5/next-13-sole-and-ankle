/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("802beb66ffwegtg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itackipg",
    "name": "imageSrc",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ya9ts3oz",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5id0edfm",
    "name": "salePrice",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pe3me2v0",
    "name": "releaseDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8mugqinq",
    "name": "categories",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "skateboarding",
        "lifestyle",
        "bestsellers",
        "running",
        "training"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("802beb66ffwegtg")

  // remove
  collection.schema.removeField("itackipg")

  // remove
  collection.schema.removeField("ya9ts3oz")

  // remove
  collection.schema.removeField("5id0edfm")

  // remove
  collection.schema.removeField("pe3me2v0")

  // remove
  collection.schema.removeField("8mugqinq")

  return dao.saveCollection(collection)
})
