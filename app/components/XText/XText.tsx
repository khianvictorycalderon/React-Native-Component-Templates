import React from 'react';
import {
  Text,
  TextProps,
  StyleProp,
  TextStyle
} from 'react-native';

//
// === Customizable Part ===
// You can freely edit the variants and their styles below
//
type Variant = 'header' | 'subheader' | 'default' | 'caption' | 'small';

const variantStyles: Record<Variant, TextStyle> = {
  default: { fontSize: 16 },
  header: { fontSize: 32, fontWeight: 'bold', fontFamily: "Segoe UI" },
  subheader: { fontSize: 24, fontWeight: '600' },
  caption: { fontSize: 12, color: '#666' },
  small: { fontSize: 10, color: '#999' },
};
//
// === End of Customizable Part ===
//


// Internal types and logic (usually no need to change this)
interface XTextProps extends TextProps {
  variant?: Variant;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

// Base styling applied to all variants
const baseStyle: TextStyle = {
  fontFamily: 'Poppins-Regular',
  color: '#222',
};

export default function XText({
  variant = 'default',
  style,
  children,
  ...props
}: XTextProps) {
  let content: React.ReactNode = children;

  if (typeof children === 'string') {
    // Replace <br/> or <br> with newline
    content = children.replace(/<br\s*\/?>/gi, '\n');
  }

  return (
    <Text style={[baseStyle, variantStyles[variant], style]} {...props}>
      {content}
    </Text>
  );
}

