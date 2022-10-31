import UIkit from 'uikit';

const notification = (message, status) => {
  UIkit.notification({
    message: `<p class="uk-text-center uk-margin-remove">${message}</p>`,
    pos: 'top-center',
    status,
  });
};

export default notification;
