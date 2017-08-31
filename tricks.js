;(() => {
  console.log('GitHub Trick or Treat!')
  const nodes = document.querySelectorAll(
    'span.head-ref span.css-truncate-target:not(.user)'
  )
  if (document.querySelectorAll('a.copy-branchname-clicker').length) {
    console.log('Already enabled :(')
    return
  }
  const copyDumper = document.createElement('input')
  copyDumper.id = '_copy-dumper'
  copyDumper.type = 'hidden'
  document.body.appendChild(copyDumper)
  Array.from(nodes).forEach(node => {
    const branchName = node.textContent
    copyDumper.value = branchName
    const parent = node.parentNode.parentNode
    const clicker = document.createElement('a')
    clicker.classList.add('copy-branchname-clicker')
    clicker.href = '#'
    clicker.style.fontSize = '9px'
    clicker.style.backgroundColor = '#eff7ff'
    clicker.style.borderRadius = '2px'
    clicker.style.padding = '2px'
    clicker.textContent = 'Copy branch name'
    clicker.onclick = event => {
      event.preventDefault()
      // Temporarily make the copyDump input element a 'text' type...
      copyDumper.type = 'text'
      document.querySelector('#_copy-dumper').select()
      document.execCommand('Copy')
      // ...then change it back to hidden.
      copyDumper.type = 'hidden'
      clicker.textContent = 'Copied!'
      clicker.classList.add('copy-copied')
      window.setTimeout(() => {
        Array.from(document.querySelectorAll('a.copy-copied')).forEach(n => {
          n.textContent = 'Copy branch name'
          n.classList.remove('copy-copied')
        })
      }, 3000)
    }
    parent.appendChild(clicker)
  })
  if (!nodes.length) {
    console.warn(
      "Can't find any head-ref spans that have the branch name in it"
    )
  }
})()
