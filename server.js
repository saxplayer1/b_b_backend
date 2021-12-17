const express = require('express');
const app = express();
const PORT = 8080;
const jobsRoute = require("./routes/jobsRouter")
const applicantsRoute = require("./routes/applicantsRouter")
const specsRoute = require("./routes/specsRouter")
const employersRoute = require("./routes/employersRouter")

app.use(express.json());
app.use('/jobs', jobsRoute);
app.use('/applicants', applicantsRoute);
app.use('/specs', specsRoute);
app.use('/employers', employersRoute);

app.listen(
    PORT,
    () => console.log("it's alive at " + PORT)
)