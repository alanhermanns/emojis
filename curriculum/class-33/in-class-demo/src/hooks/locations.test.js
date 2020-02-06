import { renderHook } from '@testing-library/react-hooks';
import { useLocations } from './locations';

jest.mock('../services/weatherApi.js', () => ({
  getLocations() {
    return Promise.resolve([
      { title: 'Portland', type: 'City', woeid: 3456 }
    ]);
  }
}));

describe('location hooks', () => {
  it('useLocation', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useLocations('port'));

    await waitForNextUpdate();

    expect(result.current).toEqual([
      { title: 'Portland', type: 'City', woeid: 3456 }
    ]);
  });
});
