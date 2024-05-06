import React, { useState, useEffect } from "react";
import subjects, { Subject } from "../../public/data/syllabus-data";
import styles from "./index.module.css";

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(subjects[0]);

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
            value={selectedSubject.id}
            onChange={handleSubjectChange}
          >
            {" "}
            <option value="" disabled hidden>
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
        <table className="w-11/12 mx-auto text-center">
          <tbody>
            <tr>
              <td>教科名</td>
              <td>{selectedSubject.id}</td>
            </tr>
            <tr>
              <td>単位数</td>
              <td>{selectedSubject.param_2}</td>
            </tr>
            <tr>
              <td>あああ</td>
              <td>{selectedSubject.param_3}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
