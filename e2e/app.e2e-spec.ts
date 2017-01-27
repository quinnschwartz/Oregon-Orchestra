import { OrchestraPage } from './app.po';

describe('orchestra App', function() {
  let page: OrchestraPage;

  beforeEach(() => {
    page = new OrchestraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
