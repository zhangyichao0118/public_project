import { MyAngularDiaryPage } from './app.po';

describe('my-angular-diary App', function() {
  let page: MyAngularDiaryPage;

  beforeEach(() => {
    page = new MyAngularDiaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
