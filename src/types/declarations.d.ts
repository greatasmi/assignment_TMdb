// src/types/declarations.d.ts

declare module 'react-native-image-slider-box' {
  import * as React from 'react';
  import { StyleProp, ImageStyle } from 'react-native';

  export interface SliderBoxProps {
    images: (string | number)[];
    autoplay?: boolean;
    circleLoop?: boolean;
    dotStyle?: StyleProp<ImageStyle>;
    sliderBoxHeight?: number;
    onCurrentImagePressed?: (index: number) => void;
    paginationBoxVerticalPadding?: number;
  }

  export class SliderBox extends React.Component<SliderBoxProps> {}
}
