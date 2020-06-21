import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// const Resize = Dimensions.get('window').height / 812;
const Resize = 1;
const Metrics = {
  baseMargin: Resize * 2,
  baseRadius: Resize * 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  icons: {
    tiny: Resize * 14,
    small: Resize * 20,
    medium: Resize * 24,
    large: Resize * 30,
    xl: Resize * 40,
  },
  images: {
    small: Resize * 20,
    medium: Resize * 40,
    large: Resize * 60,
    logo: Resize * 200,
  },
};

export default Metrics;
