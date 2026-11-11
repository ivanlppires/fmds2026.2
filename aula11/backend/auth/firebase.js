import admin from "firebase-admin";
import serviceAccount from "./fmds20262-firebase-adminsdk-fbsvc-f978f04707.json" with { type: "json" };
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
