const express = require('express');
const router = express.Router();
const controller = require('../controllers/Controller')

// get request //
router.get('/', controller.todaysHome_get);

router.get('/Create', controller.todaysCreate_get);

// redirect //
router.get('/Home', controller.todaysRedirect);

router.use(express.urlencoded({extended: true}));

// post request //
router.post('/Home', controller.todaysCreate_post);

// delete request //
router.delete('/Home:id', controller.todaysDelete_delete);


module.exports = router;