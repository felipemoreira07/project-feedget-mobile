import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface SendFeedbackButtonProps extends TouchableOpacityProps {
  isLoading: boolean;
}

export function SendFeedbackButton({ isLoading, ...rest }: SendFeedbackButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >

      {
        isLoading ? (
          <ActivityIndicator
            color={theme.colors.text_on_brand_color}
          />
        ) : (
          <Text style={styles.title}>
            Enviar Feedback
          </Text>
        )
      }

    </TouchableOpacity>
  );
}