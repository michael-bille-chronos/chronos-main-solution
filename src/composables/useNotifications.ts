import { INotification } from '@/interfaces/INotification';
import { reactive, toRefs } from 'vue';

const globalState = reactive({
  notifications: null as Array<INotification> | null,
});

const useNotifications = () => {
  // METHODS
  const getNotifications = () => {
    globalState.notifications = mock;
  };

  const getNotificationCtaLabel = (state: string) => {
    const flowstate = parseInt(state);

    if (flowstate === 1) return 'Sign License Agreement';
    else return 'Select Publication Option';
  };

  // RETURN
  return { ...toRefs(globalState), getNotifications, getNotificationCtaLabel };
};

export default useNotifications;

const mock = [
  {
    publicationid: 'B9B836EB-1FFE-40C5-85A9-01F22185B965',
    title: 'Investigating personal determinants of phishing and the effect of national culture',
    flowstate: '1',
  },
  {
    publicationid: 'BD408A0F-6A0C-4D26-8145-5A8E5BC93572',
    title: 'Structural Model for the Relationships between Age-friendly Communities and Quality of Life of Older Adults in Hefei, China',
    flowstate: '2',
  },
];
