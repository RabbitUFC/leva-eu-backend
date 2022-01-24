require('dotenv').config();

module.exports = {
  debug: process.env.DEBUG === 'true',
  jwtSecret: process.env.JWT_SECRET,
  db: {
    uri: process.env.DB_URI,
  },
  aws: {
    keyID: process.env.AWS_KEY_ID,
    keySecret: process.env.AWS_SECRET,
    region: process.env.AWS_REGION_NAME,
    bucket: process.env.AWS_BUCKET_NAME,
    cdnUrl: process.env.AWS_CDN_URL,
  },
  email: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PWD,
  },
};
