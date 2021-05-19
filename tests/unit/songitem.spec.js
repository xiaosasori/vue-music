import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('SongItem.vue', () => {
  test('render song.display_name', () => {
    const song = {
      display_name: 'test',
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });

    const compositionAuthor = wrapper.find('[data-test="author"]');

    expect(compositionAuthor.text()).toBe(song.display_name);
  });

  test('renders song.docID in id attribute', () => {
    const song = {
      docID: 'abc',
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });

    // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
    expect(wrapper.classes()).toContain(`song-id-${song.docID}`);
  });

  //   test('renders router link', () => {
  //     const song = {
  //       docID: 'abc',
  //     };

  //     const wrapper = mount(SongItem, {
  //       propsData: { song },
  //       global: {
  //         components: {
  //           'router-link': RouterLinkStub,
  //         },
  //         mocks: {
  //           navigate: () => {},
  //         },
  //       },
  //     });

//     expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
//       name: 'song', params: { id: song.docID },
//     });
//   });
});
