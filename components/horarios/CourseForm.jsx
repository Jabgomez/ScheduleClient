import { useContext, useEffect, useState } from 'react';

//Components
import courseContext from '../../context/courses/courseContext'
import schoolyearContext from '../../context/schoolyears/schoolyearContext'
import parallelContext from '../../context/parallels/parallelContext'
import scheduleContext from '../../context/schedules/scheduleContext'


const CourseForm = () => {
    const coursesContext = useContext(courseContext);
    const schoolyearsContext = useContext(schoolyearContext);
    const parallelsContext = useContext(parallelContext);
    const schedulesContext = useContext(scheduleContext);

    //Obtener datos necesarios de los cursos
    const { getCourse } = coursesContext; //Funciones Context
    const { courses } = coursesContext; // Datos Context

    //Obtener el año actual
    const { schoolyear } = schoolyearsContext; // Datos Context

    //Obtener datos necesarios para los paralelos
    const { parallels } = parallelsContext; //Datos Context
    const { getParallel } = parallelsContext; //Funciones Context

    //Obtener datos necesarios para los horarios
    const { setData } = schedulesContext;

    
    useEffect(() => {
        getCourse({
            id_schoolyear : schoolyear[0]._id
        });
    }, [schoolyear])

    //state formulario
    const [form, setForm] = useState({
        modality: 0,
        id_parallel: {}
    });
    
    //STATE DEL CURSO (Necesario para obtener paralelos)
    const [course, setCourse] = useState({
        id_course: ""
    });

    //OBTENER PARALELOS DEL CURSO SELECCIONADO
    useEffect(() => {
        if(course.id_course != ''){
            getParallel(course);
        }
    }, [course])

    //SELECCIONAR CURSO PARA OBTENER PARALELOS
    const handleChangeCourse = e => {
        setCourse({
            [e.target.name]: e.target.value
        })
    }

    //Leer valores del form Modalidad
    const handleChangeMod = e => {
        setForm({
            ...form,
            modality: e.target.value
        })
    }

    //Leer valores del form Paralelo
    const handleChangePar = e => {
        setForm({
            ...form,
            id_parallel: e.target.value
        })
    }
    
    const submitForm = e => {
        e.preventDefault();
        if(form) {
            if(form.id_parallel) setData(form);
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Ajustes</h3>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <div className="row">
                        <div className="col-2 col-form-label">
                            <label htmlFor="modalidad">Modalidad:</label>
                        </div>
                        <div className="col-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="modalidad" onChange={handleChangeMod}>
                                    <option value="0">Matutina</option>
                                    <option value="1">Vespertina</option>              
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-2 col-form-label">
                            <label htmlFor="course">Curso:</label>
                        </div>
                        <div className="col-sm-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="course" name="id_course" onChange={handleChangeCourse}>
                                    <option>Seleccione</option>
                                    {
                                        courses
                                        ?
                                            courses.map(course => (
                                                <option key={course._id} value={course._id}>{course.name}</option>
                                            ))
                                        : null 
                                    }                            
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-1">
                        <div className="col-sm-2 col-form-label">
                            <label htmlFor="parallel">Paralelo:</label>
                        </div>
                        <div className="col-sm-10">
                            <div className="input-group input-group-merge">
                                <select className="form-control" id="parallel" onChange={handleChangePar}>
                                    <option>Seleccione</option>
                                    {
                                        parallels
                                        ?
                                            parallels.map(parallel => (
                                                <option key={parallel._id} value={parallel._id}>{parallel.name}</option>
                                            ))
                                        : null
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-2"></div>
                        <div className="col-10">
                            <button type="button" className="btn btn-primary" onClick={submitForm}>Crear Horario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CourseForm;