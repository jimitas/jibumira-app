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
        <h1>Syllabus Viewer</h1>
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
        <h2>{selectedSubject.id}</h2>
        <ul>
          <li>{selectedSubject.param_1}</li>
          <li>{selectedSubject.param_2}</li>
          <li>{selectedSubject.param_3}</li>
        </ul>
      </main>
    </div>
  );
}
