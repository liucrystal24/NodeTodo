const fs = require('fs')
const path = 'D:\\nodestudy\\db'

const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]

if (fs.existsSync(path)) {
  switch (verb) {
    case 'add':
      const list = JSON.parse(fs.readFileSync(path))
      list.push([content, false])
      fs.writeFileSync(path, JSON.stringify(list))
      break;

    case 'delete':
      const n = content - 1
      const list2 = JSON.parse(fs.readFileSync(path))
      list2.splice(n, 1)
      fs.writeFileSync(path, JSON.stringify(list2))
      break;

    case 'update':
      const m = content - 1
      const list3 = JSON.parse(fs.readFileSync(path))
      list3[m][0] = content2
      fs.writeFileSync(path, JSON.stringify(list3))
      break;

    case 'list':
      const list4 = JSON.parse(fs.readFileSync(path))
      console.log(list4)
      break;

    case 'done':
      const x = content - 1
      const list5 = JSON.parse(fs.readFileSync(path))
      list5[x][1] = true
      fs.writeFileSync(path, JSON.stringify(list5))
      break;

    default:
      console.log(`没有${verb}指令`)
      break;
  }
  console.log(JSON.parse(fs.readFileSync(path)));
} else {
  switch (verb) {
    case 'add':
      const list = []
      list.push([content, false])
      fs.writeFileSync(path, JSON.stringify(list))
      break;

    default:
      console.log(`没有任务需要做，请先执行添加操作\n -> node todo add <content>`)
      break;
  }
}