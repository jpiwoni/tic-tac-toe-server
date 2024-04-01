const Player = require('../models/player');

exports.getLeaders = async (req, res) => {
  try {
    const leaders = await Player.find().sort({ totalWins: -1 }).limit(3);
    res.json(leaders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addWinOrTie = async (req, res) => {
  const { userName } = req.body;

  try {
    const player = await Player.findOne({ userName: userName });
    if (player) {
        player.totalWins += 1;
        await player.save();
    } else {
        const newPlayer = new Player({ userName: userName, totalWins: 1});
        await newPlayer.save();
    }
    res.json({message: "Win/Tie added successfully."})
  } catch (err) {
    res.status(500).send(err.message);
  }
};
