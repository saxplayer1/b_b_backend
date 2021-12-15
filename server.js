const express = require('express');
const app = express();
const PORT = 8080;
const jobsRoute = require("./routes/jobsRouter")
const applicantsRoute = require("./routes/applicantsRouter")


app.use(express.json());
app.use('/jobs', jobsRoute).use;
app.use('/applicants', applicantsRoute);

app.listen(
    PORT,
    () => console.log("it's alive at " + PORT)
)