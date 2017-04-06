import { TeamGlassesPage } from './app.po';

describe('team-glasses App', () => {
  let page: TeamGlassesPage;

  beforeEach(() => {
    page = new TeamGlassesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
