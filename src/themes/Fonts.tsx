import {Colors} from '.';

const Type = {
  bold: 'Averta-Bold',
  semiBold: 'Averta-Semibold',
  regular: 'Averta-Regular',
};

const Heading1Base = {
  fontFamily: Type.bold,
  fontSize: 28,
  lineHeight: 32,
};

const Heading1 = {
  Primary: {
    ...Heading1Base,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...Heading1Base,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...Heading1Base,
    color: Colors.TextPrimary,
  },
  Red: {
    ...Heading1Base,
    color: Colors.Red,
  },
  TextHint: {
    ...Heading1Base,
    color: Colors.TextHint,
  },
  Highlight: {
    ...Heading1Base,
    color: Colors.Highlight,
  },
  Background: {
    ...Heading1Base,
    color: Colors.Background,
  },
  Secondary: {
    ...Heading1Base,
    color: Colors.Secondary,
  },
};

const Heading2Base = {
  fontFamily: Type.bold,
  fontSize: 24,
  lineHeight: 32,
};

const Heading2 = {
  Primary: {
    ...Heading2Base,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...Heading2Base,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...Heading2Base,
    color: Colors.TextPrimary,
  },
  Red: {
    ...Heading2Base,
    color: Colors.Red,
  },
  TextHint: {
    ...Heading2Base,
    color: Colors.TextHint,
  },
  Highlight: {
    ...Heading2Base,
    color: Colors.Highlight,
  },
  Background: {
    ...Heading2Base,
    color: Colors.Background,
  },
  Secondary: {
    ...Heading2Base,
    color: Colors.Secondary,
  },
};

const Heading3Base = {
  fontFamily: Type.bold,
  fontSize: 20,
  lineHeight: 32,
};

const Heading3 = {
  Primary: {
    ...Heading3Base,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...Heading3Base,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...Heading3Base,
    color: Colors.TextPrimary,
  },
  Red: {
    ...Heading3Base,
    color: Colors.Red,
  },
  TextHint: {
    ...Heading3Base,
    color: Colors.TextHint,
  },
  Highlight: {
    ...Heading3Base,
    color: Colors.Highlight,
  },
  Background: {
    ...Heading3Base,
    color: Colors.Background,
  },
  Secondary: {
    ...Heading3Base,
    color: Colors.Secondary,
  },
};

const TextBoldBase = {
  fontFamily: Type.semiBold,
  fontSize: 16,
  lineHeight: 24,
};

const TextBold = {
  Primary: {
    ...TextBoldBase,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...TextBoldBase,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...TextBoldBase,
    color: Colors.TextPrimary,
  },
  Red: {
    ...TextBoldBase,
    color: Colors.Red,
  },
  TextHint: {
    ...TextBoldBase,
    color: Colors.TextHint,
  },
  Highlight: {
    ...TextBoldBase,
    color: Colors.Highlight,
  },
  Background: {
    ...TextBoldBase,
    color: Colors.Background,
  },
  Secondary: {
    ...TextBoldBase,
    color: Colors.Secondary,
  },
  White: {
    ...TextBoldBase,
    color: Colors.White,
  },
};

const ContentBase = {
  fontFamily: Type.regular,
  fontSize: 16,
  lineHeight: 24,
};

const Content = {
  Primary: {
    ...ContentBase,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...ContentBase,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...ContentBase,
    color: Colors.TextPrimary,
  },
  Red: {
    ...ContentBase,
    color: Colors.Red,
  },
  TextHint: {
    ...ContentBase,
    color: Colors.TextHint,
  },
  Highlight: {
    ...ContentBase,
    color: Colors.Highlight,
  },
  Background: {
    ...ContentBase,
    color: Colors.Background,
  },
  Secondary: {
    ...ContentBase,
    color: Colors.Secondary,
  },
  White: {
    ...ContentBase,
    color: Colors.White,
  },
};

const ContentChildBase = {
  fontFamily: Type.regular,
  fontSize: 14,
  lineHeight: 20,
};

const ContentChild = {
  Primary: {
    ...ContentChildBase,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...ContentChildBase,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...ContentChildBase,
    color: Colors.TextPrimary,
  },
  Red: {
    ...ContentChildBase,
    color: Colors.Red,
  },
  TextHint: {
    ...ContentChildBase,
    color: Colors.TextHint,
  },
  Highlight: {
    ...ContentChildBase,
    color: Colors.Highlight,
  },
  Background: {
    ...ContentChildBase,
    color: Colors.Background,
  },
  Secondary: {
    ...ContentChildBase,
    color: Colors.Secondary,
  },
  White: {
    ...ContentChildBase,
    color: Colors.White,
  },
};

const ContentChildBoldBase = {
  fontFamily: Type.semiBold,
  fontSize: 14,
  lineHeight: 20,
};

const ContentChildBold = {
  Primary: {
    ...ContentChildBoldBase,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...ContentChildBoldBase,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...ContentChildBoldBase,
    color: Colors.TextPrimary,
  },
  Red: {
    ...ContentChildBoldBase,
    color: Colors.Red,
  },
  TextHint: {
    ...ContentChildBoldBase,
    color: Colors.TextHint,
  },
  Highlight: {
    ...ContentChildBoldBase,
    color: Colors.Highlight,
  },
  Background: {
    ...ContentChildBoldBase,
    color: Colors.Background,
  },
  Secondary: {
    ...ContentChildBoldBase,
    color: Colors.Secondary,
  },
  White: {
    ...ContentChildBoldBase,
    color: Colors.White,
  },
};

const ErrorBase = {
  fontFamily: Type.regular,
  fontSize: 12,
  lineHeight: 16,
};

const Error = {
  Primary: {
    ...ErrorBase,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...ErrorBase,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...ErrorBase,
    color: Colors.TextPrimary,
  },
  Red: {
    ...ErrorBase,
    color: Colors.Red,
  },
  TextHint: {
    ...ErrorBase,
    color: Colors.TextHint,
  },
  Highlight: {
    ...ErrorBase,
    color: Colors.Highlight,
  },
  Background: {
    ...ErrorBase,
    color: Colors.Background,
  },
  Secondary: {
    ...ErrorBase,
    color: Colors.Secondary,
  },
  White: {
    ...ErrorBase,
    color: Colors.White,
  },
};

const ErrorBoldBase = {
  fontFamily: Type.semiBold,
  fontSize: 12,
  lineHeight: 16,
};

const ErrorBold = {
  Primary: {
    ...ErrorBoldBase,
    color: Colors.Primary,
  },
  TextSecondary: {
    ...ErrorBoldBase,
    color: Colors.TextSecondary,
  },
  TextPrimary: {
    ...ErrorBoldBase,
    color: Colors.TextPrimary,
  },
  Red: {
    ...ErrorBoldBase,
    color: Colors.Red,
  },
  TextHint: {
    ...ErrorBoldBase,
    color: Colors.TextHint,
  },
  Highlight: {
    ...ErrorBoldBase,
    color: Colors.Highlight,
  },
  Background: {
    ...ErrorBoldBase,
    color: Colors.Background,
  },
  Secondary: {
    ...ErrorBoldBase,
    color: Colors.Secondary,
  },
  White: {
    ...ErrorBoldBase,
    color: Colors.White,
  },
};

export default {
  Heading1,
  Heading2,
  Heading3,
  TextBold,
  Content,
  ContentChild,
  ContentChildBold,
  Error,
  ErrorBold,
};
