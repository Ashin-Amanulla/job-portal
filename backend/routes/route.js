const adminController = require('../controllers/adminsController')
const jobsController = require('../controllers/jobsController')
const router = require('express').Router();

//ROUTES
router.post('/api/admins/login',(adminController.adminSignIn))
router.post('/api/admins',(adminController.createAdmin))
router.get('/api/admins',(adminController.getAllAdmin))
router.get('/api/admins/:id',(adminController.getAdminDetails))
router.put('/api/admins/:id',(adminController.editAdminDetails))
router.delete('/api/admins/:id',(adminController.deleteAdminDetails))



router.post('/api/jobs',(jobsController.createJob))
router.get('/api/jobs',(jobsController.getAllJobs)) //add filter option as well
router.get('/api/jobs/:id',(jobsController.getJobDetails))
router.put('/api/jobs/:id',(jobsController.editJobDetails))
router.delete('/api/jobs/:id',(jobsController.deleteJobDetails))

//additional
router.get('/api/jobs/search',(jobsController.searchJobs))


module.exports = router