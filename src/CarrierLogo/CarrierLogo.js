// @flow

import * as React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import StyleSheet from '../PlatformStyleSheet';
import type { Props } from './CarrierLogoTypes';
import { SIZE_OPTIONS } from './consts';
import { logoSizes } from './styles';
import { getCarrierImageUri, parseCarriers } from './CarrierLogoHelpers';

const pixelRatio = PixelRatio.get();
export default function CarrierLogo({
  size = SIZE_OPTIONS.LARGE,
  carriers = [],
}: Props) {
  const carriersLength = carriers.length;
  return (
    <View
      style={[
        styles.wrapper,
        carriersLength > 1 ? sizeStyles[SIZE_OPTIONS.LARGE] : sizeStyles[size],
      ]}
    >
      {parseCarriers(carriers).map((carrierData, index) => (
        <Image
          key={carrierData.code}
          style={[
            styles.logo,
            getLogoSizeStyle(carriersLength, size),
            carriersLength === 2 && index === 1 && styles.logoFlexEnd,
          ]}
          source={{
            uri: getCarrierImageUri(
              carriersLength,
              size,
              pixelRatio,
              carrierData
            ),
          }}
        />
      ))}
    </View>
  );
}

const getLogoSizeStyle = (carriersLength: number, size: string) => {
  if (carriersLength === 1) {
    return sizeStyles[size];
  }
  return carriersLength > 2
    ? sizeStyles['small-padded']
    : sizeStyles[SIZE_OPTIONS.SMALL];
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: defaultTokens.backgroundCarrierLogo,
  },
  logo: {
    backgroundColor: defaultTokens.backgroundCarrierLogo,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
  },
  logoFlexEnd: {
    alignSelf: 'flex-end',
  },
});

const sizeStyles = StyleSheet.create(logoSizes);
