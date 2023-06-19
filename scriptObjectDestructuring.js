const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
  showAgeAndLangs: function (obj) {
    let { age } = obj
    let { languages } = obj.skills

    let str = `Мне ${age} и я владею языками: `

    languages.forEach((lang) => {
      str += `${lang.toUpperCase()} `
    })

    return str
  },
}

function showExperience(plan) {
  let { exp } = plan.skills

  return exp
}

function showProgrammingLangs(plan) {
  let str = ''

  let { programmingLangs } = plan.skills

  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
  }

  return str
}
