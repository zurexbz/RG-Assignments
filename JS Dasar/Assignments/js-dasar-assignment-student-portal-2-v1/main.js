function process_argv() {
    const { argv } = process;
    const result = studentStatus(argv[2], argv[3]);

    return result;
}

function studentStatus(name, studentId) {
    if(studentId.includes("FE")){
        year = studentId.substring(2, 6);
        programCode = studentId.substring(6, 8);
        if(programCode === "21"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Ekonomi pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "22"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "23"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Akuntansi pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "31"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Publik pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "32"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "33"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Hubungan Internasional pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "41"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Teknik Sipil pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "42"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Arsitektur pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "51"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Matematika pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "52"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Fisika pada Fakultas Ekonomi sejak tahun ${year}.`
        } else if(programCode === "53"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Informatika pada Fakultas Ekonomi sejak tahun ${year}.`
        } 
    } else if(studentId.includes("FISIP")){
        year = studentId.substring(5, 9);
        programCode = studentId.substring(9, 11);
        if(programCode === "21"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Ekonomi pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "22"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "23"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Akuntansi pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "31"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Publik pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "32"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "33"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Hubungan Internasional pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "41"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Teknik Sipil pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "42"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Arsitektur pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "51"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Matematika pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "52"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Fisika pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } else if(programCode === "53"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Informatika pada Fakultas Ilmu Sosial dan Politik sejak tahun ${year}.`
        } 
    } else if(studentId.includes("FTIS")){
        year = studentId.substring(4, 8);
        programCode = studentId.substring(8, 10);
        if(programCode === "21"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Ekonomi pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "22"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "23"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Akuntansi pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "31"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Publik pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "32"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "33"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Hubungan Internasional pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "41"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Teknik Sipil pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "42"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Arsitektur pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "51"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Matematika pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "52"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Fisika pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        } else if(programCode === "53"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Informatika pada Fakultas Teknologi Informasi dan Sains sejak tahun ${year}.`
        }
    } else if(studentId.includes("FT")){
        year = studentId.substring(2, 6);
        programCode = studentId.substring(6, 8);
        if(programCode === "21"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Ekonomi pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "22"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "23"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Akuntansi pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "31"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Publik pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "32"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "33"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Hubungan Internasional pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "41"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Teknik Sipil pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "42"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Arsitektur pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "51"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Matematika pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "52"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Fisika pada Fakultas Teknik sejak tahun ${year}.`
        } else if(programCode === "53"){
            return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi Informatika pada Fakultas Teknik sejak tahun ${year}.`
        }
    }
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;
