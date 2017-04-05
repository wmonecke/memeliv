import { MemelivPage } from './app.po';

describe('memeliv App', () => {
  let page: MemelivPage;

  beforeEach(() => {
    page = new MemelivPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
