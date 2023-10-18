const fs = require('fs')
const esprima = require('esprima')
const matter = require('gray-matter')

function convert(literal) {
  var result = literal.substring(1, literal.length - 1)
  result = result.replace(/'/g, '"')
  result = result.replace(/\\"/g, '"')
  return "'" + result + "'"
}

;(async () => {
  try {
    const dir = fs.readdirSync('./data/blog')
    let path
    for (const path of dir) {
      try {
        pathSelected = path
        const file = fs.readFileSync(`./data/blog/${path}`)
        const { data, content } = matter(file)
        delete data.date_updated;
      
        const stringified = matter.stringify(content, data)
        // console.log(stringified);
        fs.writeFileSync(`./data/blog/${path}`, stringified);
      } catch (error) {
        // throw error;
        console.log(dataForError)
      }
    }
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
