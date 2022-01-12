import {S3} from 'aws-sdk';
import {getExtension} from 'mime';
import {v4 as uuid} from 'uuid';

import {aws} from '../config';

function uploadImage(folder, filetype) {
  const extension = getExtension(filetype);
  const Key = `${folder}/${uuid()}.${extension}`;

  const getUrl = `https://${aws.cdnUrl}/${Key}`;
  const putUrl = s3.getSignedUrl('putObject', {
    Bucket: aws.bucket,
    Key,
    Expires: 900,
    ContentType: filetype,
    ACL: 'public-read',
  });

  return {getUrl, putUrl};
}

const s3 = new S3({
  signatureVersion: 'v4',
  region: 'us-east-1',
  accessKeyId: aws.keyID,
  secretAccessKey: aws.keySecret,
});

export {uploadImage};
