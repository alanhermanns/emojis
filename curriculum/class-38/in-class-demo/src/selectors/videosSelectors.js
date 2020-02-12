export const getThumbnailUrls = state => {
  return state.map(videoId => ({
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/default.jpg`,
    videoId
  }));
};
