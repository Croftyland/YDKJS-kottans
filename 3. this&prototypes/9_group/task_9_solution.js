function mostMoney(students) {
    const richStudent = students.reduce((total, current) => {
            const {name, fives, tens, twenties} = current
            const studentTotal = (fives * 5) + (tens * 10) + (twenties * 20)

            return studentTotal > total.money ?
                {name, money: studentTotal} : studentTotal === total.money ?
                    {name: "all", money: studentTotal} : total
        }, {name: null, money: 0}
    )

    return richStudent.name
}
