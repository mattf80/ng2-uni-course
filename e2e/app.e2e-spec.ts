import { Ng2UniCoursePage } from './app.po';

describe('ng2-uni-course App', function() {
  let page: Ng2UniCoursePage;

  beforeEach(() => {
    page = new Ng2UniCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
