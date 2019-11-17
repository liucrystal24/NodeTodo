const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, 'db')

const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]

let list
const n = content


ebsureFileExits()
fetch()

switch (verb) {
  case 'add':
    addTask()
    break;

  case 'delete':
    deleteTask(n)
    break;

  case 'update':
    updateTask(n)
    break;

  case 'list':
    break;

  case 'done':
    doneTask(n)
    break;

  default:
    console.log(`没有${verb}指令`)
    break;
}

writedb()
displayTask()

//辅助函数
function ebsureFileExits() {
  if (!fs.existsSync(filepath)) {
    list = []
    writedb()
  }
}

function fetch() {
  list = JSON.parse(fs.readFileSync(filepath))
}

function addTask() {
  list.push([content, false])
}

function writedb() {
  fs.writeFileSync(filepath, JSON.stringify(list))
}

function deleteTask(n) {
  list.splice(n - 1, 1)
}

function updateTask(n) {
  list[n - 1][0] = content2
}

function doneTask(n) {
  list[n - 1][1] = true
}

function displayTask() {
  console.log(JSON.parse(fs.readFileSync(filepath)));
}