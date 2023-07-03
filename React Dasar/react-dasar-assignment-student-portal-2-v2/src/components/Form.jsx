import { useState } from "react";

const Form = (props) => {
    const [fullname, setFullname] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [programStudy, setProgramStudy] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const faculty = getFaculty(programStudy);
        const newStudent = {
            fullname,
            birthDate,
            gender,
            faculty,
            programStudy
        };

        props.addStudent(newStudent);
        setFullname('');
        setBirthDate('');
        setGender('');
        setProgramStudy('');
    };
    
    const getFaculty = (programStudy) => {
        switch (programStudy) {
            case 'Ekonomi':
            case 'Manajemen':
            case 'Akuntansi':
                return 'Fakultas Ekonomi';
            case 'Administrasi Publik':
            case 'Administrasi Bisnis':
            case 'Hubungan Internasional':
                return 'Fakultas Ilmu Sosial dan Politik';
            case 'Teknik Sipil':
            case 'Arsitektur':
                return 'Fakultas Teknik';
            case 'Matematika':
            case 'Fisika':
            case 'Informatika':
                return 'Fakultas Teknologi Informasi dan Sains';
            default:
                return '';
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Fullname"
                data-testid="name"
            />
            <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="Birth Date"
                data-testid="date"
            />
            <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
                data-testid="gender"
            />
            <input
                type="text"
                value={programStudy}
                onChange={(e) => setProgramStudy(e.target.value)}
                placeholder="Program Study"
                data-testid="prody"
            />
        <button type="submit" data-testid="submit">
            Add Student
        </button>
        </form>
        );
    };

export default Form;