import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

const notificationService = {
  notify: (
    type,
    title,
    message,
  ) => {
    Toast.show({
      type: type === 'success' ? ALERT_TYPE.SUCCESS : ALERT_TYPE.DANGER,
      title,
      textBody: message,
    });
  },
};

export default notificationService;
