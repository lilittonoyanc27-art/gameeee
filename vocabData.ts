export interface ConjugationChallenge {
  sentence: string;
  translation: string;
  correctAnswer: string;
  options: string[];
  verb: "quedar" | "quedarse";
}

export const CONJUGATION_CHALLENGES: ConjugationChallenge[] = [
  // Quedar (to meet/to fit/to remain)
  { 
    sentence: "Yo ___ con mis amigos a las ocho.", 
    translation: "Ես հանդիպում եմ ընկերներիս հետ ժամը ութին:",
    correctAnswer: "quedo", 
    options: ["quedo", "me quedo", "quedas"],
    verb: "quedar"
  },
  { 
    sentence: "¿A qué hora ___ nosotros?", 
    translation: "Ժամը քանիսի՞ն ենք մենք հանդիպելու:",
    correctAnswer: "quedamos", 
    options: ["quedamos", "nos quedamos", "quedan"],
    verb: "quedar"
  },
  { 
    sentence: "Esta camisa te ___ muy bien.", 
    translation: "Այս վերնաշապիկը քեզ շատ լավ է սազում:",
    correctAnswer: "queda", 
    options: ["queda", "se queda", "quedo"],
    verb: "quedar"
  },
  { 
    sentence: "Tú ___ en el parque con ella.", 
    translation: "Դու պայմանավորվում ես հանդիպել նրա հետ այգում:",
    correctAnswer: "quedas", 
    options: ["quedas", "te quedas", "quedamos"],
    verb: "quedar"
  },
  
  // Quedarse (reflexive - to stay/remain in a place)
  { 
    sentence: "Hoy yo ___ en casa porque estoy cansado.", 
    translation: "Այսօր ես մնում եմ տանը, որովհետև հոգնած եմ:",
    correctAnswer: "me quedo", 
    options: ["me quedo", "quedo", "se queda"],
    verb: "quedarse"
  },
  { 
    sentence: "¿Por qué tú no ___ en el hotel?", 
    translation: "Ինչո՞ւ դու չես մնում հյուրանոցում:",
    correctAnswer: "te quedas", 
    options: ["te quedas", "quedas", "se queda"],
    verb: "quedarse"
  },
  { 
    sentence: "Nosotros ___ en España este verano.", 
    translation: "Մենք մնում ենք Իսպանիայում այս ամառ:",
    correctAnswer: "nos quedamos", 
    options: ["nos quedamos", "quedamos", "os quedáis"],
    verb: "quedarse"
  },
  { 
    sentence: "Ellos ___ en la biblioteca para estudiar.", 
    translation: "Նրանք մնում են գրադարանում սովորելու համար:",
    correctAnswer: "se quedan", 
    options: ["se quedan", "quedan", "nos quedamos"],
    verb: "quedarse"
  },
  { 
    sentence: "Mi abuela ___ conmigo hoy.", 
    translation: "Տատիկս այսօր մնում է ինձ հետ:",
    correctAnswer: "se queda", 
    options: ["se queda", "queda", "me quedo"],
    verb: "quedarse"
  },
  { 
    sentence: "Vosotros ___ en la playa un rato más.", 
    translation: "Դուք մնում եք լողափում մի փոքր ավելի երկար:",
    correctAnswer: "os quedáis", 
    options: ["os quedáis", "quedáis", "se quedan"],
    verb: "quedarse"
  }
];
