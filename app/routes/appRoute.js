const express = require('express');
const appController = require('../controllers/appController');

const router = express.Router();

/**
 * Router for the HTTP Get method
 */

router.get('/', async (req, res) => {
  try {
    // Get query parameter 'search'
    const searchQuery = req.query.search; 

    if (!searchQuery) {
      return res.status(400).json({ error: 'Query parameter search is missing' });
    }

    // Bring the array with the videos found by the Youtube API
    const videos = await appController.searchYoutubeVideos(searchQuery);

    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'A server error ocurred, try again' });
  }
});

module.exports = router;
