import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const serviceAccount = require('./fmds20262-firebase-adminsdk-fbsvc-f978f04707.json');

const admin = initializeApp({
    credential: cert(serviceAccount)
});

export const verifyToken = async (req, res, next) => {
    
    if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const token = req.headers.authorization.split(' ')[1];
    let user = null;
    getAuth().verifyIdToken(token)
        .then((decodedToken) => {
            user = decodedToken;
            console.log(user);
            next();
        })
        .catch((error) => {
            res.status(401).json({ error: 'Unauthorized' });
        });
}

export default admin;