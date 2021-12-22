import {connect, connection} from 'mongoose';

import {db} from '../config';

async function connectDB() {
  await connect(db.uri, {
    auth: {'authSource': 'admin'},
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('[ SUCCESSFULLY CONNECTED TO DB ]');

  return connection;
}

export default connectDB;
