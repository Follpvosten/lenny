var eyes = [
  ['⌐■', '■'],
  [' ͠°', ' °'],
  ['⇀', '↼'],
  ['´• ', ' •`'],
  ['´', '`'],
  ['`', '´'],
  ['ó', 'ò'],
  ['ò', 'ó'],
  ['⸌', '⸍'],
  ['>', '<'],
  ['Ƹ̵̡', 'Ʒ'],
  ['ᗒ', 'ᗕ'],
  ['⟃', '⟄'],
  ['⪧', '⪦'],
  ['⪦', '⪧'],
  ['⪩', '⪨'],
  ['⪨', '⪩'],
  ['⪰', '⪯'],
  ['⫑', '⫒'],
  ['⨴', '⨵'],
  ['⩿', '⪀'],
  ['⩾', '⩽'],
  ['⩺', '⩹'],
  ['⩹', '⩺'],
  ['◥▶', '◀◤'],
  ['◍', '◎'],
  ['/͠-', '┐͡-\\'],
  ['⌣', '⌣”'],
  [' ͡⎚', ' ͡⎚'],
  ['≋'],
  ['૦ઁ'],
  ['  ͯ'],
  ['  ͌'],
  ['ළ'],
  ['◉'],
  ['☉'],
  ['・'],
  ['▰'],
  ['ᵔ'],
  [' ﾟ'],
  ['□'],
  ['☼'],
  ['*'],
  ['`'],
  ['⚆'],
  ['⊜'],
  ['>'],
  ['❍'],
  ['￣'],
  ['─'],
  ['✿'],
  ['•'],
  ['T'],
  ['^'],
  ['ⱺ'],
  ['@'],
  ['ȍ'],
  ['  '],
  ['  '],
  ['x'],
  ['-'],
  ['$'],
  ['Ȍ'],
  ['ʘ'],
  ['Ꝋ'],
  [''],
  ['⸟'],
  ['๏'],
  ['ⴲ'],
  ['◕'],
  ['◔'],
  ['✧'],
  ['■'],
  ['♥'],
  [' ͡°'],
  ['¬'],
  [' º '],
  ['⨶'],
  ['⨱'],
  ['⏓'],
  ['⏒'],
  ['⍜'],
  ['⍤'],
  ['ᚖ'],
  ['ᴗ'],
  ['ಠ'],
  ['σ'],
  ['☯']
]
var mouths = [
  ['v'],
  ['ᴥ'],
  ['ᗝ'],
  ['Ѡ'],
  ['ᗜ'],
  ['Ꮂ'],
  ['ᨓ'],
  ['ᨎ'],
  ['ヮ'],
  ['╭͜ʖ╮'],
  [' ͟ل͜'],
  [' ͜ʖ'],
  [' ͟ʖ'],
  [' ʖ̯'],
  ['ω'],
  [' ³'],
  [' ε '],
  ['﹏'],
  ['□'],
  ['ل͜'],
  ['‿'],
  ['╭╮'],
  ['‿‿'],
  ['▾'],
  ['‸'],
  ['Д'],
  ['∀'],
  ['!'],
  ['人'],
  ['.'],
  ['ロ'],
  ['_'],
  ['෴'],
  ['ѽ'],
  ['ഌ'],
  ['⏠'],
  ['⏏'],
  ['⍊'],
  ['⍘'],
  ['ツ'],
  ['益'],
  ['╭∩╮'],
  ['Ĺ̯'],
  ['◡'],
  [' ͜つ']
]
var ears = [
  ['q', 'p'],
  ['ʢ', 'ʡ'],
  ['⸮', '?'],
  ['ʕ', 'ʔ'],
  ['ᖗ', 'ᖘ'],
  ['ᕦ', 'ᕥ'],
  ['ᕦ(', ')ᕥ'],
  ['ᕙ(', ')ᕗ'],
  ['ᘳ', 'ᘰ'],
  ['ᕮ', 'ᕭ'],
  ['ᕳ', 'ᕲ'],
  ['(', ')'],
  ['[', ']'],
  ['¯\\_', '_/¯'],
  ['୧', '୨'],
  ['୨', '୧'],
  ['⤜(', ')⤏'],
  ['☞', '☞'],
  ['ᑫ', 'ᑷ'],
  ['ᑴ', 'ᑷ'],
  ['ヽ(', ')ﾉ'],
  ['\\(', ')/'],
  ['乁(', ')ㄏ'],
  ['└[', ']┘'],
  ['(づ', ')づ'],
  ['(ง', ')ง'],
  ['⎝', '⎠'],
  ['ლ(', 'ლ)'],
  ['ᕕ(', ')ᕗ'],
  ['(∩', ')⊃━☆ﾟ.*'],
  ['|']
]

function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getPart (parts, index) {
  return parts[Math.min(index, parts.length - 1)]
}

module.exports = function () {
  var eye = random(eyes)
  var mouth = random(mouths)
  var ear = random(ears)

  return getPart(ear, 0) + getPart(eye, 0) + getPart(mouth, 0) + getPart(eye, 1) + getPart(ear, 1)
}

module.exports.eyes = eyes
module.exports.mouths = mouths
module.exports.ears = ears
