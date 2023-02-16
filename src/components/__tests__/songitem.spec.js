import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { beforeEach } from "vitest";

describe("SongItem.vue", () => {
  let wrapper;
  const song = {
    display_name: "test",
    codID: "abc",
  };
  beforeEach(() => {
    wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });
  test("render song.display_name", () => {
    const compositionAuthor = wrapper.find(".display-name");

    expect(compositionAuthor.text()).toBe(song.display_name);
  });

  test("render song.docID in id attribute", () => {
    expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
  });
});
 