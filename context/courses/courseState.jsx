import React, { useReducer } from 'react';

//Components
import courseContext from './courseContext'
import courseReducer from './courseReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    GET_COURSE,
    CREATE_COURSE,
    CHECK_COURSE
} from '../../types'

const CourseState = props => {
    const initialState = {
        courses: [],
        errorForm: false
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(courseReducer, initialState)

    //funciones para el CRUD
    const getCourse = async schoolyear => {
        try {
            const resultado = await clienteAxios.get('/api/course', {params: schoolyear});
            console.log(resultado);
            dispatch({
                type: GET_COURSE,
                payload: resultado.data.courses
            })
        } catch(error) {
            console.log(error);
        }
    }

    const createCourse = async course => {
        try{
            const resultado = await clienteAxios.post('/api/course', course);
            console.log(resultado);
            dispatch({
                type: CREATE_COURSE,
                payload: course
            })
        }catch(error){
            console.log(error)
        }
    }

    const checkForm = () => {
        dispatch({
            type: CHECK_COURSE
        })
    }

    return (
        <courseContext.Provider value={{
            courses: state.courses,
            errorForm: state.errorForm,

            getCourse,
            createCourse,
            checkForm
        }}>
            {props.children}
        </courseContext.Provider>
    )
}

export default CourseState;