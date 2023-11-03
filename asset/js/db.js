var db = new Dexie("test")
const dbVersion = 1;

db.version(dbVersion).stores({
    courses:"_id",
})