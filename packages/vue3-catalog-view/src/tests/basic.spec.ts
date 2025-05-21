import { describe, expect, it } from "vitest";
import BasicDemo from "@/demo/BasicDemo.vue";
import WindowDemo from "@/demo/WindowDemo.vue";
import { render } from "vitest-browser-vue";
import { userEvent } from "@vitest/browser/context";
import { sleep } from "@/utils";

describe("basic", () => {
  it("block scroll render", async () => {
    const page = render(BasicDemo);
    // 已经渲染目录
    await expect
      .element(page.baseElement.querySelector(".vcv-wrapper"))
      .toBeInTheDocument();
    // 已经渲染全部目录
    expect(
      page.baseElement.querySelectorAll(".vcv-catalog-item-wrapper")?.length
    ).toBe(16);
    // 第一个被选中
    await expect
      .element(page.baseElement.querySelector(".vcv-catalog-item-wrapper"))
      .toHaveClass("active");
    // 点击第二个元素
    await userEvent.click(
      page.baseElement.querySelectorAll(".vcv-catalog-item-wrapper")[1]
    );
    await sleep(1000);
    expect(
      (page.baseElement.querySelector(".article-content") as HTMLElement)
        .scrollTop ==
        (page.baseElement.querySelector("#vcvTitle-basic-1") as HTMLElement)
          .offsetTop -
          20
    ).toBe(true);
    page.unmount();
  });

  it("window scroll render", async () => {
    const page = render(WindowDemo);
    // 已经渲染目录
    await expect
      .element(page.baseElement.querySelector(".vcv-wrapper"))
      .toBeInTheDocument();
    // 已经渲染全部目录
    expect(
      page.baseElement.querySelectorAll(".vcv-catalog-item-wrapper")?.length
    ).toBe(16);
    // 第一个被选中
    await expect
      .element(page.baseElement.querySelector(".vcv-catalog-item-wrapper"))
      .toHaveClass("active");
    // 点击第二个元素
    await userEvent.click(
      page.baseElement.querySelectorAll(".vcv-catalog-item-wrapper")[1]
    );
    await sleep(1000);
    expect(
      window.scrollY ==
        (page.baseElement.querySelector("#vcvTitle-window-1") as HTMLElement)
          .offsetTop -
          20
    ).toBe(true);
    page.unmount();
  });
});
