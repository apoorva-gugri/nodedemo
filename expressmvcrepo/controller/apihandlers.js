const fs = require('fs')
const path = './edata.json'
const employees = JSON.parse(fs.readFileSync(`${path}`))


exports.getAllEmployee=(req, res) => {
    res.status(200).json({
        status: 'success',
        result: employees.length,
        data: {
            employeesInfo: employees
        }
    })
}
exports.addemployee=(req, res) => {
    const empId = employees[employees.length - 1].id + 1
    const newEmployee = {
        id: empId,
        first_name: req.body.fn,
        last_name: req.body.ln,
        email: req.body.email,
        ip: req.body.ipadd,
    }
    employees.push(newEmployee)
    fs.writeFile('edata.json', JSON.stringify(employees, null, 2),
        (err) => {
            if (err) {
                res.status(404).json({
                    "msg": "failed to create employee"
                })
            }
            else {
                res.status(201).json({
                    status: "success",
                    employeesInfo: newEmployee
                })

            }
        }
    )
}
exports.removeemployee=(req, res) => {
    const empdId = req.params.id * 1   //converting string id to integer
    const index = employees.findIndex(e => e.id === empdId)
    if (index===-1) {
        res.status(404).json({
            status: 'invalidd id',
            desc: "Employees id not found pls check again"
        })
    }

    employees.splice(index,1);

    fs.writeFile('edata.json', JSON.stringify(employees, null, 2),
        (err) => {
            if (err) {
                res.status(500).json({
                    "msg": "failed to delete employee"
                })
            }
            else {
                res.status(200).json({
                    status: "success",
                    result: "employee deleted successfully"
                })
            }
        }
    )
}

exports.test=(req, res)=>{

    res.json({
        msg: "get request"
    })
}
exports.test1=(req, res)=>{

    res.json({
        msg: "post request"
    })
}
exports.test2=(req, res)=>{

    res.json({
        msg: "delete request"
    })
}