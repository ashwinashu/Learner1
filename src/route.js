const { Router } = require('express');

const cmsContent = require('./api/cmsContent/cms.routes');

const router = Router();

router.get('/', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'http://localhost/3002');
  res.end();
});

router.use('/cmsContent', cmsContent);

module.exports = router;
