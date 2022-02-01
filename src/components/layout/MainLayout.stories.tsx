import {Story, Meta} from "@storybook/vue3/types-7-0"
import {MainLayout} from './MainLayout';

export default {
  title: 'Layout System/MainLayout',
  component: MainLayout,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;


const mainStory = (args: any) => ({
  components: {MainLayout},
  setup() {
    return {args};
  },
  template: `
    <MainLayout v-bind="args" reverseSideBar="false">
      <div style="background: #0AD561; height: 100%;">
      </div>
    </MainLayout>`
});

export const main: any = mainStory.bind({});

main.args = {
  style: 'background: white; border:1px solid red'
};
