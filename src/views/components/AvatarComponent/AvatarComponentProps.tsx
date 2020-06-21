import {ViewStyle, TextStyle} from 'react-native';

export interface AvatarComponentProps {
  picture?: string;
  full_name?: string;
  size?: number;
  style?: ViewStyle;
  isSmallSize?: boolean;
}
