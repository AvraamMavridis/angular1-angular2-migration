import { WebpackPlaygroundPage } from './app.po';

describe('webpack-playground App', function() {
  let page: WebpackPlaygroundPage;

  beforeEach(() => {
    page = new WebpackPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
