const Job = require('../models/Jobs');

// jobsController.js

// Create a new job
exports.createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).send(job);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all jobs with optional filtering
exports.getAllJobs = async (req, res) => {
    const match = {};
    if (req.query.industry) {
        match.industry = req.query.industry;
    }
    // Add more filters as needed

    try {
        const jobs = await Job.find(match);
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get job details by id
exports.getJobDetails = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).send();
        }
        res.send(job);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Edit job details
exports.editJobDetails = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'location', 'link', 'industry', 'job_type', 'experience_level', 'keywords']; // Add or remove fields as necessary
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).send();
        }
        updates.forEach((update) => job[update] = req.body[update]);
        await job.save();
        res.send(job);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete job details
exports.deleteJobDetails = async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).send();
        }
        res.send(job);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Search for jobs (this could use a text index or specific query parameters)
exports.searchJobs = async (req, res) => {
    // Example: searching by keyword
    try {
        const jobs = await Job.find({ $text: { $search: req.query.q } });
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).send(error);
    }
};
