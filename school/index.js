var group = require('./group')

group.add('cara',[1,2])
exports.add = function (groups) {
  groups.forEach(function (item, index) {
    var group = item
    var teacherName = item.teacherName
    var students = item.students
  })
  group.add('teacherName', ['kyo', 'kyo'])
}
