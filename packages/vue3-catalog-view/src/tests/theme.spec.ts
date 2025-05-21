import ThemeLineDemo from "@/demo/ThemeLineDemo.vue";
import ThemePointDemo from "@/demo/ThemePointDemo.vue";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-vue";

describe("theme", () => {
  it("line", async () => {
    const page = render(ThemeLineDemo);
    // 已经渲染目录
    await expect
      .element(page.baseElement.querySelector(".vcv-wrapper.line"))
      .toBeInTheDocument();
    await expect
      .element(page.baseElement.querySelector(".vcv-line"))
      .toBeInTheDocument();
    page.unmount();
  });

  it("point", async () => {
    const page = render(ThemePointDemo);
    // 已经渲染目录
    await expect
      .element(page.baseElement.querySelector(".vcv-wrapper.point"))
      .toBeInTheDocument();
    await expect
      .element(page.baseElement.querySelector(".vcv-line"))
      .toBeInTheDocument();
    page.unmount();
  });
});
