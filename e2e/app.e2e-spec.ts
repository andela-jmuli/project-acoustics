import { ExtraPage } from './app.po';

describe('extra App', function() {
  let page: ExtraPage;

  beforeEach(() => {
    page = new ExtraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
