import { beforeEach, describe, expect, it } from "vitest";
import BasicDemo from "@/demo/BasicDemo.vue";
import { render } from "vitest-browser-vue";

describe("animation", () => {
  it("basic", () => {
    const page = render(BasicDemo);
    expect(page.baseElement.querySelector(".vcv-wrapper")).not.toBeNull();
  });
});
