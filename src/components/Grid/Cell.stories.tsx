import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Cell } from './Cell';


export default {
  title: 'Minesweeper/Grid/Cell',
  component: Cell,
  argTypes: {
    children: {
      control: 'number'
    },
    coords: {
      defaultValue: [1, 1]
    }
  },

} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = (args) => {
  return (
    <Cell {...args} />
  )
}


export const CellIsEmpty = Template.bind({})
CellIsEmpty.args = {
  children: 0
}

export const CellWith1 = Template.bind({})
CellWith1.args = {
  children: 1
}

export const CellWith3 = Template.bind({})
CellWith3.args = {
  children: 3
}

export const CellWith8 = Template.bind({})
CellWith8.args = {
  children: 8
}

export const CellBomb = Template.bind({})
CellBomb.args = {
  children: 9
}

export const CellClosed = Template.bind({})
CellClosed.args = {
  children: 10
}

export const CellFlag = Template.bind({})
CellFlag.args = {
  children: 11
}

export const CellWeakFlag = Template.bind({})
CellWeakFlag.args = {
  children: 12
}