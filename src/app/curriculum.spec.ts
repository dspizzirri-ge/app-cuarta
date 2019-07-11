import { Curriculum } from './curriculum';

describe('Curriculum', () => {
  it('should create an instance', () => {
    const curriculum = new Curriculum("", "", "", "", "", null, null, new Array(), new Array())
    expect(curriculum).toBeTruthy();
  });
});
