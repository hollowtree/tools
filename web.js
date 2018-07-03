window.addEventListener('DOMContentLoaded', function () {
    var scripts = document.querySelectorAll('body script')
    var container = document.createElement('div')
    container.setAttribute('class', 'code-container')
    scripts.forEach(val => {
        var preEl = document.createElement('pre')
        var codeEl = document.createElement('code')
        var textNode = document.createTextNode(val.textContent)
        codeEl.appendChild(textNode)
        preEl.appendChild(codeEl)
        container.appendChild(preEl)
    })
    var body = document.documentElement
    body.insertBefore(container, body.firstChild)
})