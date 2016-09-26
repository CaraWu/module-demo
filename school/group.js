var student = require('./student')
var teacher = require('./teacher')

// teacher.add_teacher('Cara')
// student.add('kyo')
function add_group (teacherName, students) {
  teacher.add_teacher(teacherName)
  students.forEach(function (item, index) {
    student.add_student(item)
  })
  student.add('students')
}
exports.add_group = add_group
// module.exports = add
