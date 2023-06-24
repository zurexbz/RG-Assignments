function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];

    programCode = studentId.substring(4, 6);
    if (programCode === "21"){
        prody = facultyList[0][1];
        faculty = facultyList[0][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "22"){
        prody = facultyList[1][1];
        faculty = facultyList[1][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "23"){
        prody = facultyList[2][1];
        faculty = facultyList[2][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "31"){
        prody = facultyList[3][1];
        faculty = facultyList[3][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "32"){
        prody = facultyList[4][1];
        faculty = facultyList[4][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "33"){
        prody = facultyList[5][1];
        faculty = facultyList[5][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "41"){
        prody = facultyList[6][1];
        faculty = facultyList[6][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "42"){
        prody = facultyList[7][1];
        faculty = facultyList[7][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "51"){
        prody = facultyList[8][1];
        faculty = facultyList[8][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "52"){
        prody = facultyList[9][1];
        faculty = facultyList[9][0];
        lecturer = getLecturer(prody);
    } else if (programCode === "53"){
        prody = facultyList[10][1];
        faculty = facultyList[10][0];
        lecturer = getLecturer(prody);
    } else {
        return`Invalid Student's ID`
    }

    hasil = {
        faculty: faculty,
        id: studentId,
        name: name,
        prody: prody,
        thesisLecturer: lecturer
    }
    return hasil;
}

function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];

    if(prody === "Administrasi Publik"){
        return lecturerList[0][0];
    } else if(prody === "Ekonomi"){
        return lecturerList[1][0];
    } else if(prody === "Informatika"){
        return lecturerList[2][0];
    } else if(prody === "Teknik Sipil"){
        return lecturerList[3][0];
    } else if(prody === "Manajemen"){
        return lecturerList[4][0];
    } else if(prody === "Arsitektur"){
        return lecturerList[5][0];
    } else if(prody === "Hubungan Internasional"){
        return lecturerList[6][0];
    } else if(prody === "Administrasi Bisnis"){
        return lecturerList[7][0];
    } else if(prody === "Matematika"){
        return lecturerList[8][0];
    } else if(prody === "Fisika"){
        return lecturerList[9][0];
    } else if(prody === "Akuntansi"){
        return lecturerList[10][0];
    }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
