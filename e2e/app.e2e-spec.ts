import { Page } from "./app.po";

describe("App", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/");
    });

    it("should have a title saying Ionic Boilerplate", () => {
      page.getTitle().then(title => {
        expect(title).toEqual("Ionic Boilerplate");
      });
    });
  });
});
