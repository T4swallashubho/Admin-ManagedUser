// this file would contain the mongoose connection

const mongoose = require("mongoose");

require('dotenv').config({ debug: true })

const str = `mongodb+srv://cloud9shubho:${process.env.MONGO_CONNECT}@clusterportfolio.gozuo.mongodb.net/?retryWrites=true`;

main()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(str);
}
