/**
 * Glittering effect is enabled between 8 PM and 6 AM on any device.
 */
export const isShowTime =
  new Date().getHours() >= 20 || new Date().getHours() <= 6;

/**
 * Halloween mode is enabled during the month of October.
 */
export const isHalloween = new Date().getMonth() === 9;

/**
 * Christmas mode is enabled during the month of December.
 */
export const isChristmas =
  new Date().getMonth() === 10 || new Date().getMonth() === 11;

/**
 * New Year mode is enabled during the month of January.
 */
export const isNewYear = new Date().getMonth() === 0;
