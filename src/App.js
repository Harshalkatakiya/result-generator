import './App.css';
import { useState } from 'react';
import Result from './Result';
import View from './View';

const App = () => {
    const [editMode, setEditMode] = useState(true);
    const [student, setStudent] = useState({
        name: "",
        sem: "",
        enrollment: "",
        program: "",
        examination: "",
        department: ""
    });
    const [subject, setSubject] = useState([{
        courseCode: "",
        courseTitle: "",
        as1: "",
        as2: "",
        cia1: "",
        cia2: "",
        see: ""
    }]);
    const send = (newData) => {
        setStudent(newData.studentData);
        setSubject(newData.data);
        setEditMode(false);
    }
    const edit = (n) => {
        setStudent(n.studentData);
        setSubject(n.data);
        setEditMode(true);
    }
    return (
        <>
            {
                editMode ? (<Result daata={student} subData={subject} submit={send} />) : (<View daata={student} subData={subject} mode={edit} />)
            }

        </>
    )
}

export default App;