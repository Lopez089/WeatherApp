import { Children } from 'react';
import { Menu } from '../components';
import '../components/menu/menu.css'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {

  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Menu_close = {
  args: {
    showNav: false,
    children: ['Seville', 'Londres', 'Madrid', 'Malta', 'Malaga']
  },
};

export const Menu_open = {
  args: {
    showNav: true,
    children: ['Seville', 'Londres', 'Madrid', 'Malta', 'Malaga']
  },
};
