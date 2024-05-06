// data.ts

export interface Subject {
  id: string;
  subject_class: string;
  credit: number;
  category: string;
  textbook: string;
  sub_textbook: string;
  teacher: string;
  summary: string;
  gole_1: string;
  gole_2: string;
  gole_3: string;
  message: string;
  evaluation_1: string;
  evaluation_2: string;
  evaluation_3: string;
}

const subjects: Subject[] = [
  {
    id: '情報Ⅰ',
    subject_class: '普通科目',
    credit: 3,
    category: '必修・履修',
    textbook: '新編情報Ⅰ（東京書籍）',
    sub_textbook: 'なし',
    teacher: '野中　孝利',
    summary: '　多くの情報に囲まれた現代社会においては、必要な情報を選択し、その真偽を判断し、最適な行動を選択できる情報活用能力をはじめ、問題解決のために主体的に情報と情報技術を活用し、自ら評価し、改善しようとする態度や創造性が必要です。これらの力を身に付けるための知識と技術の習得を目指した学習を行います。',
    gole_1: "自らの生活・学習において、主体的な情報活用ができる。",
    gole_2: "情報や情報技術の仕組み、あるいは情報の取り扱い方に関する基本的な理論や方法、仕組みを理解する。",
    gole_3: "情報や情報技術が果たしている役割、及ぼす影響を理解し、情報の正しい扱い方を判断できる。",
    message: "　みなさんは、「情報」ときいて、どんなイメージをもっていますか？なぜ、すべての高校生が「情報Ⅰ」を学ぶようになったのでしょうか？10年後もいきいきと社会に参画していくためには、情報を適切かつ効果的に活用して，問題を発見・解決したり自分の考えを形成したりしていくための「情報活用能力」を身に着けることが大切です。スクーリングでは、第１章～第４章の実践編にあたる第５章の内容をみなさんと活動しながら学べるように計画しています。レポートでは、教科書の内容を読み進めながら自分のペースで計画的に回答していきましょう。",
    evaluation_1: "単位認定試験の点数により評価する。",
    evaluation_2: "単位認定試験の点数により評価する。",
    evaluation_3: "レポートの提出状況とスクーリングの出席率により評価する。",
  },
  {
    id: '国語',
    subject_class: '普通科目',
    credit: 3,
    category: '必修・履修等を記入',
    textbook: '教科書名を記入',
    sub_textbook: 'ささてぃ',
    teacher: '',
    summary: 'ここに授業の概要を書きます。',
    gole_1: "ここに教科のゴール１を書きます。",
    gole_2: "ここに教科のゴール２を書きます。",
    gole_3: "ここに教科のゴール３を書きます。",
    message: "ここに履修にあたってのメッセージを書きます。",
    evaluation_1: "単位認定試験の点数により評価する。",
    evaluation_2: "単位認定試験の点数により評価する。",
    evaluation_3: "レポートの提出状況とスクーリングの出席率により評価する。",
  },
  {
    id: '美術',
    subject_class: '普通科目',
    credit: 3,
    category: '必修・履修等を記入',
    textbook: '教科書名を記入',
    sub_textbook: '',
    teacher: 'りさてぃ',
    summary: 'ここに授業の概要を書きます。',
    gole_1: "ここに教科３のゴール１を書きます。",
    gole_2: "ここに教科３のゴール２を書きます。",
    gole_3: "ここに教科３のゴール３を書きます。",
    message: "ここに履修にあたってのメッセージを書きます。",
    evaluation_1: "単位認定試験の点数により評価する。",
    evaluation_2: "単位認定試験の点数により評価する。",
    evaluation_3: "レポートの提出状況とスクーリングの出席率により評価する。",
  },
  {
    id: '体育',
    subject_class: '普通科目',
    credit: 3,
    category: '必修・履修等を記入',
    textbook: '教科書名を記入',
    sub_textbook: '',
    teacher: 'たかぎー',
    summary: 'ここに授業の概要を書きます。',
    gole_1: "ここに教科４のゴール１を書きます。",
    gole_2: "ここに教科４のゴール２を書きます。",
    gole_3: "ここに教科４のゴール３を書きます。",
    message: "ここに履修にあたってのメッセージを書きます。",
    evaluation_1: "単位認定試験の点数により評価する。",
    evaluation_2: "単位認定試験の点数により評価する。",
    evaluation_3: "レポートの提出状況とスクーリングの出席率により評価する。",
  },
  {
    id: '教科４',
    subject_class: '普通科目',
    credit: 3,
    category: '必修・履修等を記入',
    textbook: '教科書名を記入',
    sub_textbook: '',
    teacher: '',
    summary: 'ここに授業の概要を書きます。',
    gole_1: "ここに教科のゴール１を書きます。",
    gole_2: "ここに教科のゴール２を書きます。",
    gole_3: "ここに教科のゴール３を書きます。",
    message: "ここに履修にあたってのメッセージを書きます。",
    evaluation_1: "単位認定試験の点数により評価する。",
    evaluation_2: "単位認定試験の点数により評価する。",
    evaluation_3: "レポートの提出状況とスクーリングの出席率により評価する。",
  },
  // 他のダミーデータを追加
];

export default subjects;
