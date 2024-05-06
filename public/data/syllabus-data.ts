// data.ts

export interface Subject {
  id: string;
  param_1: string;
  param_2: string;
  param_3: string;
}

const subjects: Subject[] = [
  {
    id: 'subject1',
    param_1: 'Subject 1 Param 1',
    param_2: 'Subject 1 Param 2',
    param_3: 'Subject 1 Param 3',
  },
  {
    id: 'subject2',
    param_1: 'Subject 2 Param 1',
    param_2: 'Subject 2 Param 2',
    param_3: 'Subject 2 Param 3',
  },
  // 他のダミーデータを追加
];

export default subjects;
