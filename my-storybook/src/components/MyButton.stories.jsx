import { MyButton } from './MyButton';

export default {
  title: 'MyComponents/MyButton', // 左側のサイドバーでの表示名
  component: MyButton,
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary button',
  },
};