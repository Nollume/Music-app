import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { expect } from "vitest";

describe("Snapshots SongItem.vue", () => {
  test("render correctly", () => {
    const song = {
      docID: "abc",
      modified_name: "test",
      display_name: "test",
      comment_count: 5,
    };

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
