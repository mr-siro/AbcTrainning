import {StyleSheet} from 'react-native';
import {Metrics, Fonts} from '@themes';
import {ScreenUtils} from '@services';
import {Background, Border, Position} from '@share';

export default StyleSheet.create({
  image: {
    ...Border.MaxRadius,
    ...Background.TextHint,
    ...Position.CenterInParent,
    width: ScreenUtils.calculatorWidth(Metrics.baseMargin * 50),
    height: ScreenUtils.calculatorWidth(Metrics.baseMargin * 50),
  },
  imageSmall: {
    ...Border.MaxRadius,
    ...Background.TextHint,
    ...Position.CenterInParent,
    width: ScreenUtils.calculatorWidth(Metrics.baseMargin * 18),
    height: ScreenUtils.calculatorWidth(Metrics.baseMargin * 18),
  },
  noImage: {
    ...Border.MaxRadius,
    ...Position.CenterInParent,
    width: ScreenUtils.calculatorWidth(Metrics.baseMargin * 50),
    height: ScreenUtils.calculatorWidth(Metrics.baseMargin * 50),
  },
  noImageSmall: {
    ...Border.MaxRadius,
    ...Position.CenterInParent,
    width: ScreenUtils.calculatorWidth(Metrics.baseMargin * 18),
    height: ScreenUtils.calculatorWidth(Metrics.baseMargin * 18),
  },
  name: {
    ...Position.CenterInHorizontalWithParten,
    ...Fonts.Heading1.Background,
  },
  nameSmall: {
    ...Position.CenterInHorizontalWithParten,
    ...Fonts.Heading3.Background,
  },
});
