import { getThumbnailUrls } from './videosSelectors';

describe('video selectors', () => {
  it('can select thumbnail urls', () => {
    const state = [
      '12345',
      'abcd',
      'a2c4'
    ];
    const thumbnailUrls = getThumbnailUrls(state);

    expect(thumbnailUrls).toEqual([
      { thumbnailUrl: 'https://img.youtube.com/vi/12345/default.jpg', videoId: '12345' },
      { thumbnailUrl: 'https://img.youtube.com/vi/abcd/default.jpg', videoId: 'abcd' },
      { thumbnailUrl: 'https://img.youtube.com/vi/a2c4/default.jpg', videoId: 'a2c4' }
    ]);
  });
});
