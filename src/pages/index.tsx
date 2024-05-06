import React, { useState, useEffect } from "react";
import subjects, { Subject } from "../../public/data/syllabus-data";

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
        <select value={selectedSubject.id} onChange={handleSubjectChange}>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.id}
            </option>
          ))}
        </select>
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
