var admin = require("firebase-admin");
const fs = require("fs");
const configData = require("./firebaseConfigKeys");

fs.writeFileSync("serviceAccountKey.json", configData, () => {});
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
const getIPVisiters = db.collection("getipvisitors");

module.exports = getIPVisiters;
