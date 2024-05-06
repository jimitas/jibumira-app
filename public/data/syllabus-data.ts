// data.ts

export interface Subject {
  id: string;
  subject_class: string;
  credit: number;
  category: string;
  textbook:string;
}

const subjects: Subject[] = [
  {
    id: '数学Ⅰ',
    subject_class: '普通科目',
    credit: 3,
    category: '必修・履修',
    textbook: '新編情報Ⅰ（東京書籍）',
  },
  {
    id: 'subject2',
    subject_class: 'Subject 2 Param 1',
    credit: 2,
    category: 'Subject 2 Param 3',
  },
  // 他のダミーデータを追加
];

export default subjects;
