const express = require('express');
const { getLeaders, addWinOrTie } = require('../controllers/leaderboardController');
const router = express.Router();

router.get('/GetLewisTacToeLeaders', getLeaders);
router.post('/AddWinOrTie', addWinOrTie);

module.exports = router;
