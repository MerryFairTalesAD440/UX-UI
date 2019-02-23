import { shallowMount } from "@vue/test-utils";
import BookListFilter from "@/components/BookListFilter.vue";

describe("HelloWorld.vue", () => {
  it("Makes sure the filter mounts with empty search data.", () => {
    const wrapper = shallowMount(BookListFilter);
    expect(wrapper.data.search).toMatch("");
  });
});
