function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    if (gpa >= 3 && gpa <=4){
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.`
    } else if (gpa >= 2.5 && gpa <= 2.99){
        if (programId == 'ACC')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Akuntansi dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
        if (programId == 'HIN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
        if (programId == 'IAB')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Bisnis dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
        if (programId == 'IAP')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Publik dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
        if (programId == 'MJN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Manajemen dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
        if (programId == 'TKM')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Teknik Kimia dan hanya dapat mengambil SKS sebanyak 21 SKS untuk semester depan.`
    } else if (gpa >= 2 && gpa <= 2.49){
        if (programId == 'ACC')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Akuntansi dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`
        if (programId == 'HIN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`
        if (programId == 'IAB')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Bisnis dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`
        if (programId == 'IAP')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Publik dan hanya dapat mengambil SKS sebanyak 18  SKS untuk semester depan.`
        if (programId == 'MJN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Manajemen dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`
        if (programId == 'TKM')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Teknik Kimia dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.`
    } else if (gpa >= 1.5 && gpa <= 1.99){
        if (programId == 'ACC')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Akuntansi dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
        if (programId == 'HIN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
        if (programId == 'IAB')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Bisnis dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
        if (programId == 'IAP')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Publik dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
        if (programId == 'MJN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Manajemen dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
        if (programId == 'TKM')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Teknik Kimia dan hanya dapat mengambil SKS sebanyak 15 SKS untuk semester depan.`
    } else if (gpa >= 0 && gpa <= 1.49){
        if (programId == 'ACC')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Akuntansi dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
        if (programId == 'HIN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
        if (programId == 'IAB')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Bisnis dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
        if (programId == 'IAP')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Ilmu Administrasi Publik dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
        if (programId == 'MJN')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Manajemen dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
        if (programId == 'TKM')
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Teknik Kimia dan hanya dapat mengambil SKS sebanyak 12 SKS untuk semester depan.`
    } else {
        return `Invalid gpa number`
    }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
