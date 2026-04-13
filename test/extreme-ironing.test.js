import { html, fixture, expect } from '@open-wc/testing';
import "../extreme-ironing.js";

describe("ExtremeIroning test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <extreme-ironing
        title="title"
      ></extreme-ironing>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
