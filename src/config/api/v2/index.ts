import { parseV2} from './v2';
const express = require('express');
const router = express.Router();

router.post('/parse', function(req: any, res: any) {
  res.send(parseV2(req.body));
});

module.exports = router;