import {IFontSize, ISize} from './fontInterface';
export interface ITheme {
  font: {
    Regular: string;
    Medium: string;
    Bold: string;
    Light: string;
  };
  FontSize: IFontSize;
  Size: ISize;
  [key: string]: any;
}
