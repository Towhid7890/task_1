export let quiz = [
  {
    id: 1,
    type: "short_answer",
    question: "Hello. What's your name?",
    answers: [],
    correct_answer: 0,
  },
  {
    id: 2,
    type: "multiple_choice",
    question: "What industry are you in?",
   
    answers: [
      { id: 1, checkedData: false,answer: "Professional Service" },
      { id: 2,checkedData: false, answer: "Agency" },
      { id: 3,checkedData: false, answer: "HealthCare" },
      { id: 4,checkedData: false, answer: "Consumer apps and media" },
      { id: 5,checkedData: false, answer: "Consumer services" },
      { id: 6,checkedData: false, answer: "Software and services" },
      { id: 7,checkedData: false, answer: "Ecommerce, Retail and consumer Good" },
      { id: 8,checkedData: false, answer: "Education" },
      { id: 9,checkedData: false, answer: "Other" },
    ],
    correct_answer: 1,
  },
  {
    id: 3,
    type: "multiple_selection_choice",
    question: "Why is the sky blue?",
    answers: [
      { value: "Because of physics", label: "Because of physics" },
      {
        value: "Because that the way it always was",
        label: "Because that the way it always was",
      },
      { value: "I don't know", label: "I don't know" },
    ],
    correct_answer: 1,
  },
  {
    id: 4,
    type: "long_text",
    question: "So first things first, how do you catch up on Nellie and CO.content?",
    answers: [],
    correct_answer: 0,
  },
  {
    id: 5,
    type: "description",
    question: "Do you read new content?",
    answers: [],
    correct_answer: 0,
  },
  {
    id: 6,
    type: "true_false",
    question: "Is the sky blue",
    answers: [],
    correct_answer: 2,
  },
];

