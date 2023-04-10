// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var big
var header = {
  name: {
    firstName: 'Nikita',
    lastName: 'Lozovuy',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$',
  address: 'Bila Tserkva',
}

var footer = {
  name: {
    firstName: 'Nikita',
    lastName: 'Lozovuy',
  },
  address: 'Bila Tserkva',
  social: {
    email: {
      text: 'mailto:dmytro@mail.com',
      href: 'dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
   linkedin: {
text:"LinkedIn",
href:'https://www.linkedin.com/in/dmytro-test',
    }
  },
}

var education = [
  {
    name: 'НАУ',
    isEnd: true,
  },
  {
    name: 'КПІ',
    isEnd: false,
  },
  {
    name: 'КНЕУ',
    isEnd: true,
  },
  {
    name: 'IT-Brains',
    isEnd: false,
  },
]

var certificate = [
  {
    name: 'Senior',
    id: 154622,
  },
  {
    name: 'Junior',
    id: 255986,
  },
  {
    name: 'Middle',
    id: 31112335,
  },
]

var skills = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JS',
  },
  {
    name: 'React',
  },
]

var hobbies = [
  {
    name: 'Running',
    isMain: false,
  },
  {
    name: 'Piano',
    isMain: false,
  },
  {
    name: 'Guitar',
    isMain: true,
  },
  {
    name: 'Basketball',
    isMain: true,
  },
]

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    header,
    footer,
    summary: {
      title: 'Summary',
      text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
    },
    experience: {
      title: 'Other experience',
      text: `Pet project for parsing sport betting data from
      different platforms ( odds ) and sport statistics
      ( tournament position, goals etc), analyzing by
      simple mathematics models and preparing
      probability for such events like: money line -
      first win / draw / second win, totals etc.`,
    },
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    main: {
      title: 'My skills',
    },
    title: 'My hobbies',
    header,
    footer,
    skills,
    hobbies,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    title: 'My sertification',
    header,
    footer,

    main: {
      title: 'My Education',
      education,
      certificate,
    },
  })
})
// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    header,
    footer,

    main: {
      title: 'Work history',
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: null,
          },
          duration: {
            from: '10.02.2023',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com/ua',
              about:
                'Airnb competitor. Higth-load application for searching apartments',
              stacks: [
                {
                  name: 'React',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Background verification - is a feature that provides users  to prove that they are real persons',
                },
                {
                  name: 'Prepareting SEO optimized pages . The automated process  of getting  data of  the  app from documents.',
                },
              ],
              stackAmoGnt: 3,
              awardAmoGnt: 2,
            },
          ],
        },
      ],
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
