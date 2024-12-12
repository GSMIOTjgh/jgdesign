import React from 'react';
import { TextButtonBlack, TextButtonWhite, TextButtonColor } from 'jgdesign';

export default {
  title: 'button/Textbutton',
  tags:["autodocs"],
  parameters: {
    layout: ['centered']
  },
  argTypes: {
    label: {
      control: 'text',
      description: '버튼에 표시될 텍스트입니다. 이 props로 버튼 텍스를 설정할 수 있습니다.',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출됩니다.',
    },
    bgColor: {
      control: 'text',
      description: 'Color 컴포넌트의 props로 배경색을 설정할 수 있습니다. 색상 기본값은 #5925DC입니다.'
    }
  },
};

export const BlackButton = (args) => <TextButtonBlack {...args} />;
BlackButton.args = { label: 'TextButtonBlack' };

export const WhiteButton = (args) => <TextButtonWhite {...args} />;
WhiteButton.args = { label: 'fuckup' };

export const ColorButton = (args) => <TextButtonColor {...args} />;
ColorButton.args = { label: 'TextButtonColor', bgColor: '#FB6514' };

