// this file would contain the mongoose connection

const mongoose = require("mongoose");

const str =
  "mongodb+srv://cloud9shubho:VJ7rZAA7UOtlKNQ2@clusterportfolio.gozuo.mongodb.net/?retryWrites=true";

main()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(str);
}
