import {
    Dimensions,
  } from 'react-native';
export const screenHeight = Math.round(Dimensions.get('window').height);
export const screenWidth = Math.round(Dimensions.get('window').width);

const RatioByWidth = (x) => {
    return (x/414) * screenWidth
}

const RatioByHeight = (x) => {
    return (x/728) * screenHeight
}

const RatioByDevice = (x) => {
    return (x/(728/360)) * (screenHeight/screenWidth)
}

const IOSRatioByDevice = (x) => {
    return (x/(750/414)) * (screenHeight/screenWidth)
}

export {RatioByHeight, RatioByWidth, RatioByDevice, IOSRatioByDevice};