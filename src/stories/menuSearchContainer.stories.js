import { MenuSearchContainer } from '../container';
import '../components/itemMenu/itemMenu.css'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Container/MenuSearchContainer',
  component: MenuSearchContainer,
  tags: ['autodocs'],
  argTypes: {

  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MenuSearchContainer_not_data = {
  args: {
    showNav: true,
    searchs: undefined,
  }
};

export const MenuSearchContainer_data = {
  args: {
    showNav: true,
    searchs: [
      {
        city: 'Seville',
        id: '09808'
      },
      {
        city: 'Londres',
        id: '0923408'
      }, {
        city: 'Madrid',
        id: '345309808'
      }
    ]
  }
};

