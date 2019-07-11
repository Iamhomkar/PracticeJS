import { SortFilter } from './myfilter';

describe('SortFilter', () => {
  it('create an instance', () => {
    const pipe = new SortFilter();
    expect(pipe).toBeTruthy();
  });
});
