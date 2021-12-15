const express = require('express');
const app = express();
const PORT = 8080;
const jobsRoute = require("./routes/jobsRouter")
const applicantsRoute = require("./routes/applicantsRouter")
const specsRoute = require("./routes/specsRouter")

app.use(express.json());
app.use('/jobs', jobsRoute);
app.use('/applicants', applicantsRoute);
app.use('/specs', specsRoute);

app.listen(
    PORT,
    () => console.log("it's alive at " + PORT)
)