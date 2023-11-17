let admin = require('firebase-admin');
import { initFirestore } from '@auth/firebase-adapter';
//let serviceAcc = require('service.json')

let app;

if (!admin.apps.length) {
  // app = admin.initializeApp({
  //     credential: admin.credential.cert(serviceAcc)
  // })
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const adminAuth = admin.auth(app);

export { adminDb, adminAuth };
