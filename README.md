# push-notifications

The Push Notifications API provides access to native push notifications for Capacitor.

## Install

```bash
npm install @mfbhatt/push-notifications
npx cap sync
```

## Example

```js
import {
  AzurePushNotifications,
  AzurePushNotificationSchema,
  PushNotificationActionPerformed,
  PushNotificationToken,
} from '@mfbhatt/azure-push-notifications';
```

## Usage 

```js

AzurePushNotifications.requestPermissions().then((result) => {
      AzurePushNotifications.register({
        notificationHubName: '<AZURE NOTIFICATION HUB NAME>',
        connectionString:
          '<AZURE NOTIFICATION CONNECTION STRING>',
        deviceTag: '<DEVICE TAG>',
      }).then(() => {
        AzurePushNotifications.addListener(
          'registration',
          (token: PushNotificationToken) => {
            alert('Push registration success, token: ' + token.value);
          }
        );
      });
    });
```

## Listeners

```js
AzurePushNotifications.addListener(
          'registrationError',
          (error: any) => {
            alert('Error on registration: ' + JSON.stringify(error));
          }
        );

        AzurePushNotifications.addListener(
          'pushNotificationReceived',
          (notification: AzurePushNotificationSchema) => {
            alert('Push received: ' + JSON.stringify(notification));
          }
        );
        AzurePushNotifications.addListener(
          'pushNotificationActionPerformed',
          (notification: PushNotificationActionPerformed) => {
            alert('Push action performed: ' + JSON.stringify(notification));
          }
        );
```
