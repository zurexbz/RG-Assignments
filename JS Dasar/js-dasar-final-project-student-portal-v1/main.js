function process_argv() {
    const { argv } = process;
    const result = studentPortal(argv[2]);

    return result;
}

function studentPortal(studentId) {
    const studentList = [
        {
            id: "2010310164",
            name: "Rakanda Pangeran Nasution",
            gpa: 2.65,
            status: false,
        },
        {
            id: "2011310021",
            name: "Yosef Noferianus Gea",
            gpa: 3.1,
            status: true,
        },
        {
            id: "2014310100",
            name: "Angelia",
            gpa: 1.25,
            status: true,
        },
        {
            id: "2011320090",
            name: "Dito Bagus Prasetio",
            gpa: 2.75,
            status: true,
        },
        {
            id: "2011320100",
            name: "Hikman Nurahman",
            gpa: 2.45,
            status: true,
        },
        {
            id: "2010320181",
            name: "Edizon",
            gpa: 1.95,
            status: true,
        },
        {
            id: "2012320055",
            name: "Marrisa Stella",
            gpa: 3.5,
            status: false,
        },
        {
            id: "2012330080",
            name: "Dea Christy Keliat",
            gpa: 3,
            status: true,
        },
        {
            id: "2013330049",
            name: "Sekarini Mahyaswari",
            gpa: 3.5,
            status: true,
        },
        {
            id: "2012330004",
            name: "Yerica",
            gpa: 3.15,
            status: false,
        },
    ];
    let database = studentList.find((database) => database.id === studentId)
    if (!database) {
        return "Mahasiswa tidak terdaftar"
    } else if (database.status === false) {
        return `Mahasiswa dengan id ${studentId} sudah tidak aktif`
    } else {
        let result = {
            id: database.id,
            name: database.name,
            gpa: database.gpa,
            credits: getCredits(database.gpa),
            subjects: getSubjects(getCredits(database.gpa))
        };
        return result
    }
}

function getCredits(gpa) {
    if(gpa >= 0 && gpa <= 1.49){
        return 12
    } else if(gpa >= 1.5 && gpa < 2){
        return 15
    } else if(gpa >= 2 && gpa < 2.5){
        return 18
    } else if(gpa >= 2.5 && gpa < 3){
        return 21
    } else if(gpa >= 3){
        return 24
    }
}

function getSubjects(credits) {
    const subjectsList = [
        {
            subjectName: "Ilmu Politik",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Ilmu Ekonomi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Estetika",
            credit: 1,
            status: "pilihan",
        },
        {
            subjectName: "Kepemimpinan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Etika",
            credit: 2,
            status: "pilihan",
        },
        {
            subjectName: "Sosiologi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Teori Pengambil keputusan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Statistika",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Aplikasi IT",
            credit: 3,
            status: "pilihan",
        },
    ];
    let availableMK = [];
    for(let i = 0; i < subjectsList.length; i++) {
        if(credits !== 0){
            if(subjectsList[i].status === "wajib") {
                availableMK.push(subjectsList[i]);
                credits -= subjectsList[i].credit
            }
        }
        
    } 
    if(credits >= 3){
        availableMK.push(subjectsList[8]);
        credits -= subjectsList[8].credit
        if(credits >= 2){
            availableMK.push(subjectsList[4]);
            credits -= subjectsList[4].credit
            if(credits >= 1){
                availableMK.push(subjectsList[2]);
                credits -= subjectsList[2].credit 
            }
        }
    }  
    return availableMK;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentPortal,
    getSubjects,
    getCredits,
};
