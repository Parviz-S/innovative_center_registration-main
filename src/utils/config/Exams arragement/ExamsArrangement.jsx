import React, { useEffect, useState } from "react";

const all_exams_info = [
  {
    name: "Pre A1 Starters",
    id: 1,
    info: "https://www.cambridgeenglish.org/Images/467355-pre-a1-starters-faqs.pdf",
  },
  {
    name: "A1 Movers",
    id: 2,
    info: "https://www.cambridgeenglish.org/Images/467356-a1-movers-faqs.pdf",
  },
  {
    name: "A2 Flyers",
    id: 3,
    info: "https://www.cambridgeenglish.org/Images/467357-a2-flyers-faqs.pdf",
  },
  {
    name: "A2 Key",
    id: 4,
    info: "https://www.cambridgeenglish.org/exams-and-tests/key/",
  },
  {
    name: "B1 Preliminary",
    id: 5,
    info: "https://www.cambridgeenglish.org/exams-and-tests/preliminary/",
  },
  {
    name: "B1 Preliminary for Schools",
    id: 6,
    info: "https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/",
  },
  {
    name: "B2 First",
    id: 7,
    info: "https://www.cambridgeenglish.org/exams-and-tests/first/",
  },
  {
    name: "B2 First for Schools",
    id: 8,
    info: "https://www.cambridgeenglish.org/exams-and-tests/first-for-schools/",
  },
  {
    name: "C1 Advanced",
    id: 9,
    info: "https://www.cambridgeenglish.org/exams-and-tests/advanced/",
  },
  {
    name: "C2 Proficiency",
    id: 10,
    info: "https://www.cambridgeenglish.org/exams-and-tests/proficiency/",
  },
  {
    name: "Delta Module One",
    id: 11,
    info: "https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/delta/about-the-delta-modules/",
  },
  {
    name: "TKT",
    id: 12,
    info: "https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/tkt/",
  },
  {
    name: "Lingua skill",
    id: 13,
    info: "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/",
  },
  {
    name: "IELTS Mock",
    id: 14,
    info: "https://www.cambridgeenglish.org/exams-and-tests/ielts/",
  },
];
const ExamsArrangement = () => {
  const [exams, setExams] = useState(all_exams_info);
  const [selectedExams, setSelectedExams] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value);

    // Add or remove value from selectedExams array based on checkbox state
    if (event.target.checked) {
      setSelectedExams([...selectedExams, value]);
    } else {
      setSelectedExams(selectedExams.filter((val) => val !== value));
    }
  };

  const filteredExams = exams.filter((exam) => selectedExams.includes(exam.id));

  return (
    <div>
      <h1>Exam List</h1>
      {exams.map((exam) => (
        <div key={exam.id}>
          <label>
            <input
              type="checkbox"
              name={exam.name}
              value={exam.id}
              checked={selectedExams.includes(exam.id)}
              onChange={handleCheckboxChange}
            />
            {exam.name}
          </label>
        </div>
      ))}
      <h2>Selected exams:</h2>
      {filteredExams.map((exam) => (
        <div key={exam.id}>
          <p>{exam.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ExamsArrangement;
