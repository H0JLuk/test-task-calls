import { ReactComponent as ContactIcon } from '../../assets/icons/contacts.svg';

export const navbarItems = [
  { Icon: ContactIcon, text: 'Итоги', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Заказы', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Сообщения', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Звонки', link: '/', isActive: true },
  { Icon: ContactIcon, text: 'Контрагенты', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Документы', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Исполнители', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Отчеты', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'База знаний', link: '/', isActive: false },
  { Icon: ContactIcon, text: 'Настройки', link: '/', isActive: false },
] as const;
