const exams = [
  "Pre A1 Starters",
  "A1 Movers",
  "A2 Flyers",
  "A2 Key",
  "B1 Preliminary",
  "B1 Preliminary for Schools",
  "B2 First",
  "B2 First for Schools",
  "C1 Advanced",
  "C2 Proficiency",
  "Delta Module One",
  "TKT",
  "Linguaskill",
  "IELTS Mock",
];

const examInfoLink = [
  "https://www.cambridgeenglish.org/Images/467355-pre-a1-starters-faqs.pdf",
  "https://www.cambridgeenglish.org/Images/467356-a1-movers-faqs.pdf",
  "https://www.cambridgeenglish.org/Images/467357-a2-flyers-faqs.pdf",
  "https://www.cambridgeenglish.org/exams-and-tests/key/",
  "https://www.cambridgeenglish.org/exams-and-tests/preliminary/",
  "https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/",
  "https://www.cambridgeenglish.org/exams-and-tests/first/",
  "https://www.cambridgeenglish.org/exams-and-tests/first-for-schools/",
  "https://www.cambridgeenglish.org/exams-and-tests/advanced/",
  "https://www.cambridgeenglish.org/exams-and-tests/proficiency/",
  "https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/delta/about-the-delta-modules/",
  "https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/tkt/",
  "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/",
  "https://www.cambridgeenglish.org/exams-and-tests/ielts/",
];

export const ExamNames = exams.map((e, i) => {
  let exam = {
    name: e,
    id: i + 1,
    info: examInfoLink[i],
  };

  return exam;
});

console.log(ExamNames);
