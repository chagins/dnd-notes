import { NoteData } from "../types";

export const mockNotes: NoteData[] = [
  {
    $id: 1,
    body: JSON.stringify(
      'Resources:\n- Book: "Изучаем JavaScript. Руководство по созданию современных веб-приложений" by Эрик Фримен, Элизабет Робсон.\n\n- Online Course: "Современный JavaScript от нуля до героя" на Udemy.\n\n- Articles:\n"Работа с промисами в JavaScript" на Medium.\n\n"Секреты JavaScript-функций" на Хабр.'
    ),
    colors: JSON.stringify({
      id: "color-blue",
      colorHeader: "#D0E7FD",
      colorBody: "#E5F7FD",
      colorText: "#18181A",
    }),
    position: JSON.stringify({ x: 400, y: 20 }),
  },
  {
    $id: 2,
    body: JSON.stringify(
      'Resources:\n- Book: "JavaScript для профессионалов" by Николас Закас.\n\n- Online Course: "Паттерны проектирования на JavaScript" на Coursera.\n\n- Articles:\n"Массивы и объекты в JavaScript" на Medium.\n\n"Замыкания в JavaScript: что, как и почему" на Dev.to.'
    ),
    colors: JSON.stringify({
      id: "color-green",
      colorHeader: "#D0FDD0",
      colorBody: "#E5FEE5",
      colorText: "#18181A",
    }),
    position: JSON.stringify({ x: 350, y: 80 }),
  },
  {
    $id: 3,
    body: JSON.stringify(
      'Resources:\n- Book: "JavaScript: сильные стороны" by Дуглас Крокфорд.\n\n- Online Course: "Основы JavaScript" на Лекториум.\n\n- Articles:\n"Работа с API в JavaScript" на Medium.\n\n"ES6 и современные стандарты" на Хабр.'
    ),
    colors: JSON.stringify({
      id: "color-purple",
      colorHeader: "#FED0FD",
      colorBody: "#FEE5FD",
      colorText: "#18181A",
    }),
    position: JSON.stringify({ x: 500, y: 40 }),
  },
  {
    $id: 4,
    body: JSON.stringify(
      'Resources:\n- Book: "Вы не знаете JS: this и Объекты" by Кайл Симпсон.\n\n- Online Course: "Функциональное программирование в JavaScript" на Udemy.\n\n- Articles:\n"Современные подходы к асинхронному программированию" на Dev.to.\n\n"Тайминг и циклы событий в JavaScript" на Medium.'
    ),
    colors: JSON.stringify({
      id: "color-orange",
      colorHeader: "#FDD0B0",
      colorBody: "#FEE5C0",
      colorText: "#18181A",
    }),
    position: JSON.stringify({ x: 600, y: 100 }),
  },
  {
    $id: 5,
    body: JSON.stringify(
      'Resources:\n- Book: "JavaScript. Подробное руководство" by Дэвид Флэнаган.\n\n- Online Course: "Алгоритмы и структуры данных в JavaScript" на Coursera.\n\n- Articles:\n"Разработка на React и ES6" на Dev.to.\n\n"Принципы модульности JavaScript" на Хабр.'
    ),
    colors: JSON.stringify({
      id: "color-red",
      colorHeader: "#FDD0D0",
      colorBody: "#FEE5E5",
      colorText: "#18181A",
    }),
    position: JSON.stringify({ x: 450, y: 60 }),
  },
];
