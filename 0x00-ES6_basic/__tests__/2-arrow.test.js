import getNeighborhoodsList from '../2-arrow.js';

describe('getNeighborhoodsList', () => {
  let neighborhoodsList;

  beforeEach(() => {
    neighborhoodsList = new getNeighborhoodsList();
  });

  test('should initialize with SOMA and Union Square', () => {
    expect(neighborhoodsList.sanFranciscoNeighborhoods).toEqual(['SOMA', 'Union Square']);
  });

  test('should add a new neighborhood', () => {
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    expect(res).toEqual(['SOMA', 'Union Square', 'Noe Valley']);
  });

  test('should return updated list when adding multiple neighborhoods', () => {
    neighborhoodsList.addNeighborhood('Noe Valley');
    const res = neighborhoodsList.addNeighborhood('Mission');
    expect(res).toEqual(['SOMA', 'Union Square', 'Noe Valley', 'Mission']);
  });
});
