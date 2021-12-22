import app from '../app';
import connectDB from '../common/database';
import {debug} from '../config';

var connection = null;

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  if (connection == null) {
    connection = connectDB();
  }

  const response = await app(event, context);

  if (debug) {
    console.log(JSON.stringify({event}, null, 2));
    console.log(JSON.stringify({context}, null, 2));
    console.log(JSON.stringify({response}, null, 2));
  }

  return response;
}
