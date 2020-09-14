import { parse} from './v1';
const express = require('express');
const router = express.Router();

router.post('/parse', function(req: any, res: any) {
  res.send(parse(req.body));
});

module.exports = router;