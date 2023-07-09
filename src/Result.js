import './Result.css';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Result = ({ daata, subData, submit }) => {
    const [studentData, setStudentData] = useState(daata);
    const [data, setData] = useState(subData);
    const handleInput = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    }
    const addRow = () => {
        setData([...data, {
            courseCode: "",
            courseTitle: "",
            as1: "",
            as2: "",
            cia1: "",
            cia2: "",
            see: ""
        }]);
    };
    const removeRow = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newData = [...data];
        newData[index][name] = value;
        setData(newData);
    };
    const send = () => {
        submit({ studentData, data });
    }
    return (
        <>
            <div className="card">
                <div className="card-header bg-info d-flex">
                    <span className="h3 text-center">Student Result</span>
                </div>
                <div className="p-3 row g-3">
                    <div className="col-6">
                        <input type="text" className="form-control border-1" name='name' value={studentData.name} onChange={handleInput} placeholder="Full Name" />
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control border-1" name='program' value={studentData.program} onChange={handleInput} placeholder="Programme" />
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control border-1" name='sem' value={studentData.sem} onChange={handleInput} placeholder="Semester" />
                    </div>
                    <div className="col-3">
                        <input type="number" className="form-control border-1" name='enrollment' value={studentData.enrollment} onChange={handleInput} placeholder="Enrollment No." />
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control border-1" name='examination' value={studentData.examination} onChange={handleInput} placeholder="Examination" />
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control border-1" name='department' value={studentData.department} onChange={handleInput} placeholder="Department" />
                    </div>
                    <table className="heading table table-hover border">
                        <thead>
                            <tr>
                                <th rowSpan="2" className="text-center bg-primary-subtle border border-secondary">Course Code</th>
                                <th rowSpan="2" className="text-center bg-primary-subtle border border-secondary">Course Title</th>
                                <th colSpan="2" className="text-center bg-primary-subtle border border-secondary">ASSIGNMENT MARKS</th>
                                <th colSpan="2" className="text-center bg-primary-subtle border border-secondary">CIA MARKS</th>
                                <th rowSpan="2" className="text-center bg-primary-subtle border border-secondary">SEE MARKS</th>
                                <th rowSpan="2" className="text-center empty"></th>
                            </tr>
                            <tr>
                                <th className="text-center bg-dark-subtle border border-secondary">Assignment 1</th>
                                <th className="text-center bg-dark-subtle border border-secondary">Assignment 2</th>
                                <th className="text-center bg-dark-subtle border border-secondary">CIA 1</th>
                                <th className="text-center bg-dark-subtle border border-secondary">CIA 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="text" className="form-control text-uppercase" name="courseCode" value={row.courseCode} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="text" className="form-control" name="courseTitle" value={row.courseTitle} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="number" className="form-control" name="as1" value={row.maxMarks} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="number" className="form-control" name="as2" value={row.obtainedMarks} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="number" className="form-control" name="cia1" value={row.totalMarks} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="number" className="form-control" name="cia2" value={row.grade} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><input type="number" className="form-control" name="see" value={row.result} onChange={(e) => handleChange(e, index)} /></td>
                                    <td className="border border-secondary border-top-0 border-bottom-0"><button type="button" className="btn btn-danger btn-sm empty" onClick={() => removeRow(index)}><DeleteForeverIcon /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary btn-sm" onClick={addRow}><AddIcon />Add Subject</button>
                </div>
            </div>
            <div className="text-center mt-3">
                <Button variant="contained" endIcon={<SendIcon />} onClick={send}>Submit</Button>
            </div>
        </>
    )
}

export default Result;