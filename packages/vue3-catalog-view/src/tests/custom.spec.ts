import { describe, expect, it } from "vitest";
import CustomDemo from "@/demo/CustomDemo.vue";
import { render } from "vitest-browser-vue";
import { userEvent } from "@vitest/browser/context";
import { sleep } from "@/utils";

describe("custom", () => {
  it("custom slots", async () => {
    const page = render(CustomDemo);
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
        (page.baseElement.querySelector("#vcvTitle1") as HTMLElement)
          .offsetTop -
          20
    ).toBe(true);
    const style = getComputedStyle(
      page.baseElement.querySelector(".catalog-item.active") as HTMLElement
    );
    expect(style.backgroundColor).toBe("rgba(0, 0, 0, 0.1)");
    expect(style.color).toBe("rgba(30, 97, 243, 0.8)");
  });
});
