import React, { useState, useEffect } from "react";
import subjects, { Subject } from "../../public/data/syllabus-data";
import styles from "./index.module.css";

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  useEffect(() => {
    // ページ読み込み時に最初のオプションを選択する
    setSelectedSubject(null);
  }, []);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubjectId = e.target.value;
    const selected = subjects.find((subject) => subject.id === selectedSubjectId);
    if (selected) {
      setSelectedSubject(selected);
    }
  };

  return (
    <div>
      <header>
        <h1 className="mt-3 mx-auto text-center">Syllabus Viewer</h1>
        <div className={`${styles.cp_ipselect} ${styles.cp_sl03} overflow-hidden w-11/12 mx-auto text-center`}>
          <select
            className="w-full cursor-pointer text-transparent appearance-none bg-transparent"
            value={selectedSubject?.id || ""}
            onChange={handleSubjectChange}
          >
            {" "}
            <option value="" disabled>
              教科を選択してください。
            </option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.id}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main>
        {selectedSubject && (
          <div>
            <table className="w-11/12 mx-auto">
              <tbody>
                <tr>
                  <td className="w-3/12">教科名</td>
                  <td>{selectedSubject.id}</td>
                </tr>
                <tr>
                  <td>単位数</td>
                  <td>{selectedSubject.credit}</td>
                </tr>
                <tr>
                  <td>区分</td>
                  <td>{selectedSubject.category}</td>
                </tr>
                <tr>
                  <td>教科書</td>
                  <td>{selectedSubject.textbook}</td>
                </tr>
                <tr>
                  <td>副教材</td>
                  <td>{selectedSubject.sub_textbook}</td>
                </tr>
                <tr>
                  <td>講師名</td>
                  <td>{selectedSubject.teacher}</td>
                </tr>
                <tr>
                  <td>授業の概要・目的</td>
                  <td>{selectedSubject.summary}</td>
                </tr>
                <tr>
                  <td>到達目標</td>
                  <td>
                    <ul className="px-5 list-disc">
                      <li>{selectedSubject.gole_1}</li>
                      <li>{selectedSubject.gole_2}</li>
                      <li>{selectedSubject.gole_3}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    成績評価の方法
                    <br />
                    （観点別評価）
                  </td>
                  <td>
                    <ul className="px-5 list-disc">
                      <li>
                        【知識・技能】
                        <br />
                        {selectedSubject.evaluation_1}
                      </li>
                      <li>
                        【思考・判断・表現】
                        <br />
                        {selectedSubject.evaluation_2}
                      </li>
                      <li>
                        【主体的に学習に取り組む態度】
                        <br />
                        {selectedSubject.evaluation_3}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
