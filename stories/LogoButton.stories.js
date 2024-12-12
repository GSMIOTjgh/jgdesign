import React from 'react';
import { FaBeer } from "react-icons/fa";
import { LogoButtonBlack, LogoButtonWhite, LogoButtonColor } from 'jgdesign';


export default {
  title: 'button/Logobutton',
  tags:["autodocs"],
  parameters: {
    layout: ['centered']
  },
  argTypes: {
    Icon: {
        description: 'react-icons에서 사용하고 싶은 icon을 받아와 {icon 컴포넌트} 형식으로 icon을 사용 할 수 있습니다.',
      },
    iconColor: {
        description: 'Color 컴포넌트의 props로 배경색을 설정할 수 있습니다.'
    },
    iconSize: {
        description: 'icon의 크기를 설정할 수 있습니다.'
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출됩니다.',
    },
    bgColor: {
      control: 'text',
      description: 'Color 컴포넌트의 props로 배경색을 설정할 수 있습니다. 색상 기본값은 #5925DC입니다.'
    },
  },
};

export const BlackButton = (args) => <LogoButtonBlack {...args} />;
BlackButton.args = { Icon: FaBeer, iconSize: 24 };

export const WhiteButton = (args) => <LogoButtonWhite {...args} />;
WhiteButton.args = { Icon: FaBeer, iconSize: 24 };

export const ColorButton = (args) => <LogoButtonColor {...args} />;
ColorButton.args = { Icon: FaBeer, iconSize: 24, iconColor: '#FFFFFF' , bgColor: '#FB6514' };

