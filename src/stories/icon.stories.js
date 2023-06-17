import { Icon } from '../components';
import '../components/itemMenu/itemMenu.css'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {

  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Icon_default = {
  args: {
    icon: 'menu'
  }
};

