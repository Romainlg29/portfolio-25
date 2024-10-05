/**
 * Glittering effect is enabled between 9 PM and 6 AM on any device.
 */
export const isShowTime =
  new Date().getHours() > 21 || new Date().getHours() < 6;
