var student = require('./student')
var teacher = require('./teacher')

teacher.add('Cara')
// student.add('kyo')
function add (teacherName, students) {
  teacher.add(teacherName)
  students.forEach(function (item, index) {
    student.add(item)
  })
// student.add('students')
}
exports.add = add
// module.exports = add
