export default function addCurrentYear(selector) {
  const elem = document.querySelector(selector)

  const content = elem.textContent.split(" - ")
  content[1] = new Date().getFullYear()
  elem.textContent = content.join(" - ")
}
