import { registerPlugin } from '@capacitor/core';

import type { AzurePushNotificationsPlugin } from './definitions';

const AzurePushNotifications = registerPlugin<AzurePushNotificationsPlugin>(
  'AzurePushNotifications',
  {},
);

export * from './definitions';
export { AzurePushNotifications };
