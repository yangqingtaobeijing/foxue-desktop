export const navigation = [
  { name: '首页', path: '/' },
  {
    name: '学习路径',
    children: [
      { name: '初识佛学', path: '/learn/introduction' },
      { name: '基础教义', path: '/learn/basics' },
      { name: '经典入门', path: '/learn/sutras-intro' },
      { name: '深入经典', path: '/learn/sutras-advanced' },
      { name: '禅修实践', path: '/learn/meditation' },
      { name: '佛学宗派', path: '/learn/schools' },
      { name: '高级研习', path: '/learn/advanced' },
    ],
  },
  { name: '资源中心', path: '/resources' },
  { name: '关于', path: '/about' },
];

export const learningPaths = [
  {
    title: '初识佛学',
    description: '了解佛教的起源、核心概念与基本教义，开启佛学之旅。',
    path: '/learn/introduction',
    level: '入门',
    icon: 'seedling',
  },
  {
    title: '基础教义',
    description: '深入理解四圣谛、十二因缘、五蕴等核心教义。',
    path: '/learn/basics',
    level: '基础',
    icon: 'book-open',
  },
  {
    title: '经典入门',
    description: '学习《心经》《金刚经》《阿弥陀经》等入门经典。',
    path: '/learn/sutras-intro',
    level: '进阶',
    icon: 'scroll',
  },
  {
    title: '深入经典',
    description: '研读《法华经》《华严经》《楞严经》等大乘经典。',
    path: '/learn/sutras-advanced',
    level: '深入',
    icon: 'library',
  },
  {
    title: '禅修实践',
    description: '学习禅修方法、正念修行，将佛法融入日常生活。',
    path: '/learn/meditation',
    level: '实践',
    icon: 'flower-2',
  },
  {
    title: '佛学宗派',
    description: '了解禅宗、净土宗、天台宗等主要佛教宗派。',
    path: '/learn/schools',
    level: '拓展',
    icon: 'building-2',
  },
  {
    title: '高级研习',
    description: '探索唯识学、中观哲学、因明学等高深佛学理论。',
    path: '/learn/advanced',
    level: '高阶',
    icon: 'brain',
  },
];
