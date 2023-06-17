import { ItemMenu } from '../components';
import '../components/itemMenu/itemMenu.css'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/ItemMenu',
  component: ItemMenu,
  tags: ['autodocs'],
  argTypes: {

  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ItemMenu_default = {
  args: {
    onClick: () => { console.log('fun') },
    location: {
      id: '2342545',
      city: 'Madrid'
    }
  }
};

