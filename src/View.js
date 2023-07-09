import './View.css';
import { useState } from 'react';

const View = ({ daata, subData, mode }) => {
    const [studentData, setStudentData] = useState(daata);
    const [data, setData] = useState(subData);
    const calculateCiaTotal = (row) => {
        const { as1, as2, cia1, cia2 } = row;
        return parseInt(as1) + parseInt(as2) + Math.ceil(parseInt(cia1) / 5) + Math.ceil(parseInt(cia2) / 15);
    };
    const calculateTotal = (row) => {
        const { see } = row;
        return calculateCiaTotal(row) + parseInt(see);
    };
    const calculateGradePoint = (see) => {
        let gradePoint;
        if (see >= 0 && see <= 10) {
            gradePoint = 1;
        } else if (see >= 10 && see <= 20) {
            gradePoint = 2;
        } else if (see >= 20 && see <= 30) {
            gradePoint = 3;
        } else if (see >= 30 && see <= 40) {
            gradePoint = 4;
        } else if (see >= 40 && see <= 50) {
            gradePoint = 5;
        } else if (see >= 50 && see <= 60) {
            gradePoint = 6;
        } else if (see >= 60 && see <= 70) {
            gradePoint = 7;
        } else if (see >= 70 && see <= 80) {
            gradePoint = 8;
        } else if (see >= 80 && see <= 90) {
            gradePoint = 9;
        } else if (see >= 90 && see < 100) {
            gradePoint = 10;
        }
        return gradePoint;
    };
    const calculateGrade = (gradePoint) => {
        let grade;
        if (gradePoint >= 10) {
            grade = "O";
        } else if (gradePoint >= 9) {
            grade = "A+";
        } else if (gradePoint >= 8) {
            grade = "A";
        } else if (gradePoint >= 7) {
            grade = "B+";
        } else if (gradePoint >= 6) {
            grade = "B";
        } else if (gradePoint >= 5) {
            grade = "C+";
        } else if (gradePoint >= 4) {
            grade = "C";
        } else {
            grade = "F";
        }
        return grade;
    };
    const calcResult = (grade) => {
        let calcresult1;
        if (grade !== "F") {
            calcresult1 = "P";
        } else {
            calcresult1 = "F";
        }
        return calcresult1;
    }
    const calculateTotalSum = (data) => {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += calculateTotal(data[i]);
        }
        return sum;
    };
    const percentages = (data) => {
        return (parseInt(calculateTotalSum(data)) / parseInt(data.length)).toFixed(2);
    };
    const modes = () => {
        mode({ studentData, data });
    }
    return (
        <>
            <div className="container first-container">
                <div className="head">
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TtJ0XL0IoxPN1rj9H9L74OAOXpGbk9u5I1GtTzl7dxrOC8MIn8Gmpsg0_AAXt7Nk1Zk&usqp=CAU" alt="Logo" /></div>
                    <div className="head-div">
                        <h5 className="text-center">Atmiya University</h5>
                        <p className="text-center">Yogidham Gurukul, Kalawad Road, Rajkot - 360005</p>
                        <h5 className="text-center">PROVISIONAL STATEMENT OF MARKS</h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="table mt-4">
                    <tr>
                        <td className="border border-secondary">Name</td>
                        <td colSpan={3} className="border border-secondary">{studentData.name}</td>
                    </tr>
                    <tr>
                        <td className="border border-secondary">Programme</td>
                        <td colSpan={1} className="border border-secondary">{studentData.program}</td>
                        <td className="border border-secondary">Semester</td>
                        <td className="border border-secondary">{studentData.sem}</td>
                    </tr>
                    <tr>
                        <td className="border border-secondary">Enrollment No.</td>
                        <td className="border border-secondary">{studentData.enrollment}</td>
                        <td className="border border-secondary">Examination</td>
                        <td className="border border-secondary">{studentData.examination}</td>
                    </tr>
                </table>
            </div>
            <div className="container">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th rowSpan={2} className="text-center border">COURSE CODE</th>
                            <th rowSpan={2} className="text-center border">COURSE TITLE</th>
                            <th colSpan={2} className="text-center border">CIA MARKS</th>
                            <th colSpan={3} className="text-center border">SEE MARKS</th>
                            <th colSpan={3} className="text-center border">TOTAL MARKS</th>
                            <th rowSpan={2} className="text-center border">GRADE POINT</th>
                            <th rowSpan={2} className="text-center border">GRADE</th>
                            <th rowSpan={2} className="text-center border">RESULT</th>
                        </tr>
                        <tr>

                            <th className="text-center border-start">MAX</th>
                            <th className="text-center border-end">OBT</th>
                            <th className="text-center">MIN</th>
                            <th className="text-center">MAX</th>
                            <th className="text-center border-end">OBT</th>
                            <th className="text-center">MIN</th>
                            <th className="text-center">MAX</th>
                            <th className="text-center border-end">OBT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="text-center border">{row.courseCode}</td>
                                <td className="text-center border">{row.courseTitle}</td>
                                <td className="text-center border border-top-0 border-end-0 border-bottom-0">40</td>
                                <td className="text-center border-left-0 border-bottom-0">{calculateCiaTotal(row)}</td>
                                <td className="text-center border border-top-0 border-end-0 border-bottom-0">28</td>
                                <td className="text-center border border-0 border-end-0">70</td>
                                <td className="text-center border border-top-0 border-end-0 border-bottom-0 border-start-0">{row.see}</td>
                                <td className="text-center border border-bottom-0 border-end-0 border-top-0">40</td>
                                <td className="text-center border border-0">100</td>
                                <td className="text-center border border-top-0 border-end-0 border-bottom-0 border-start-0">{calculateTotal(row)}</td>
                                <td className="text-center border">{calculateGradePoint(row.see)}</td>
                                <td className="text-center border">{calculateGrade(calculateGradePoint(row.see))}</td>
                                <td className="text-center border">{calcResult(calculateGrade(calculateGradePoint(row.see)))}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <div className="text-center per-mark">
                    <span>Total Marks : {calculateTotalSum(data)}</span>
                    <span className="per">Percentage : {percentages(data)}%</span>
                </div>
            </div>
            <div className='editbtn'><button className='btn' onClick={modes}>Edit</button></div>
        </>
    )
}

export default View;