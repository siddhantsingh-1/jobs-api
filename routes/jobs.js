const express = require('express');
const { update } = require('tar');
const jobsRouter = express.Router();
const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/jobs');

jobsRouter.route('/').post(createJob).get(getAllJobs);
jobsRouter.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports = jobsRouter;