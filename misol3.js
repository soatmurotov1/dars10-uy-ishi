











const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
]);



function departament(employees) {
  if (employees.size == 0) {
    console.log("Xatolik: bo'sh ro'yxat")
  }

  let array = Array.from(employees)


  let hr = array.filter(e => e.department === "HR")
  let it = array.filter(e => e.department === "IT")


  function narx(list) {
    let total = list.reduce((a, b) => a + b.salary, 0)
    return total / list.length
  }


  let hrUrta = narx(hr)
  let itUrta = narx(it)



  if (hrUrta > itUrta) {
    console.log({ department: "HR", urtacha: hrUrta, employees: hr })
  } else if(itUrta > hrUrta) {
    console.log({ department: "IT", urtacha: itUrta, employees: it })
  } 
}


departament(employees);
