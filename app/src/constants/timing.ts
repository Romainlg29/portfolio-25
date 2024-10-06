/**
 * Glittering effect is enabled between 8 PM and 6 AM on any device.
 */
export const isShowTime =
  new Date().getHours() >= 20 || new Date().getHours() <= 6;
