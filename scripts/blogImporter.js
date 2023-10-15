const fs = require('fs');
const matter = require('gray-matter');

const importPath = '/Users/polluterofminds/Development/polluterofminds-site/blog';

(async () => {
  try {
    const dir = fs.readdirSync(importPath);
    let dataForError;
    for(const path of dir.filter(p => p.includes(".md"))) {
      try {
        pathSelected = path;
        const file = fs.readFileSync(`${importPath}/${path}`);
        const { data, content } = matter(file);
        data.tags = [];
        delete data.layout;
        data["summary"] = (data.excerpt !== 'null' || data.excerpt !== null || data.excerpt) ? data.excerpt : '';
        data["draft"] = (data.status === 'draft') ? true : false;
        delete data.excerpt;
        delete data.status;
        if(!data.summarry) {
          data["summary"] = ''
        }
        // console.log(data);
        dataForError = data;
        const stringified = matter.stringify(content, data)
        // console.log(stringified);
        fs.writeFileSync(`./data/blog/${path.replace(".md", ".mdx")}`, stringified);
      } catch (error) {
        // throw error;
        console.log(dataForError);
      }
    }
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
})()