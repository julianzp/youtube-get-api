const axios = require('axios');

// Google client_id, needed to use the Youtube API
const API_KEY = 'AIzaSyAcmkY5i541DeKAh22_zZUFmhS7l06K9Mc';


/**
 * Search in the Youtube API by a keyword
 * 
 * @param {string} searchQuery 
 * @returns {Promise<Array>}
 */
async function searchYoutubeVideos(searchQuery) {
  const response = await axios.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      params: {
        part: 'snippet',
        key: API_KEY,
        q: searchQuery,
        type: 'video',
        maxResults: 10,
      },
    }
  );

  // Set all the data it will be shown in the request
  const videos = response.data.items.map(item => ({
    published_at: item.snippet.publishedAt,
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails
  }));

  return videos;
}

module.exports = {
  searchYoutubeVideos,
};
