/**
 * Created by yogesh on 11/2/17.
 */

express = require("express");
let app = express();
app.use(express.static("public"));
app.listen(3000, function () {
    console.log("express server is up on port 3000");
});
