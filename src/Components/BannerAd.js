import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';
import { BannerArea } from './Mainstyle.js';

const BannerAd = () => {
  
  const bannerAdId = Platform.OS === 'android' ? 'android ads' : 'ios ads';

  return (
    <BannerArea>
      <AdMobBanner
        bannerSize='smartBannerPortrait'
        adUnitID={ bannerAdId }
        servePersonalizedAds={ true }
      />
    </BannerArea>
  )
}

export default BannerAd;