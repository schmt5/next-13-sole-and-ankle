/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "802beb66ffwegtg",
    "created": "2023-08-20 16:21:54.157Z",
    "updated": "2023-08-20 16:21:54.157Z",
    "name": "shoes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4skjjy0n",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("802beb66ffwegtg");

  return dao.deleteCollection(collection);
})
