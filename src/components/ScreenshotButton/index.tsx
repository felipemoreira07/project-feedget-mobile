import { Trash, Camera } from 'phosphor-react-native';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeScreenshot,
  onRemoveScreenshot
}: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
    >

      {
        screenshot ? (
          <View>
            <Image
              style={styles.image}
              source={{ uri: screenshot }}
            />
            <Trash
              size={22}
              color={theme.colors.text_secondary}
              weight="fill"
              style={styles.removeIcon}
            />
          </View>
        ) : (
          <Camera
            size={24}
            color={theme.colors.text_secondary}
            weight="bold"
          />
        )
      }

    </TouchableOpacity>
  );
}