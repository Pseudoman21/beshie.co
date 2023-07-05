const beshiefyHandler = event => {
  event.preventDefault()

  const input = document.getElementById('inputText')
  const result = document.getElementById('result')
  const resultArea = document.getElementById('resultArea')
  const text = input.value
  const words = text.split(' ')
  const beshiefiedWords = words.map(word => word + ' 🤸')
  const beshiefiedText = beshiefiedWords.join(' ')
  resultArea.style.display = 'flex'
  result.innerText = beshiefiedText
}

const copyButton = document.getElementById('copy')
const resultElement = document.getElementById('result')
const statusElement = document.getElementById('status')
copyButton.addEventListener('click', () => {
  const range = document.createRange()
  range.selectNode(resultElement)

  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  document.execCommand('copy')

  selection.removeAllRanges()
  statusElement.innerHTML = 'Copied!'

  setTimeout(() => {
    statusElement.innerHTML = ''
  }, 4000)
})
