import {ViewStyle, TextStyle} from 'react-native';

export interface ItemComponentProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
  isHightLight?: boolean;
  isActive?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}
