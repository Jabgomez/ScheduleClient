import { useContext, useEffect } from "react";
import { MoreVertical } from "react-feather"

import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'


const Table = () => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);

    const { getCourse } = coursesContext; //Funciones Context
    const { courses } = coursesContext; // Datos Context
    const { schoolyear } = schoolyearsContext; // Datos Context

    useEffect(() => {
        getCourse({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Listado</h4>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses
                            ?
                                courses.map(course => (
                                    <tr key={course._id}>
                                        <td>
                                            <span className="font-weight-bold">{course.name}</span>
                                        </td>
                                        <td>{course.description}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-sm dropdown-toggle hide-arrow" data-toggle="dropdown">
                                                    <MoreVertical/>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        <i data-feather="edit-2" className="mr-50"></i>
                                                        <span>Edit</span>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i data-feather="trash" className="mr-50"></i>
                                                        <span>Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
                        
    );
}
 
export default Table;