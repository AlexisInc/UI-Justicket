
import Button from 'react-bootstrap/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import './concert-form.css'
import { Concert } from '../model/concert';

const CreateConcert =  ()=> {

    const initialFormState : Concert = {
    name: '',
    salle :'',
    price :null,
    places : null

    
    };
    const navigate = useNavigate();

 

    
    const handleSubmit = async (values) => {
      
    }

    
    return (
        <div id="form"> 
        <h3> Créer concert</h3>


        <Formik
        initialValues={initialFormState}
        validationSchema={Yup.object({
        name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lieu: Yup.string()
        .max(30, 'Must be 15 characters or less')
        .required('Required'),
       
        })}
        onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
        }}    
    
        >
        <Form className="needs-validation"  >
        <div className="input" >
        <Field placeHolder="name" className="form-control" name="name" type="text" />
        <ErrorMessage className="invalid-feedback" name="name" />
        </div>
        <div className="input">
        <Field  placeHolder="salle"  className="form-control" name="salle" type="text" />
        <ErrorMessage className="invalid-feedback" name="salle" />
        </div>

        <div className="input">
        <Field  placeHolder="nombre de places"  className="form-control" name="places" type="text" />
        <ErrorMessage className="invalid-feedback" name="places" />
        </div>

        <div className="input">
        <Field  placeHolder="€"  className="form-control" name="price" type="text" />
        <ErrorMessage className="invalid-feedback" name="price" />
        </div>
        
        
        <Button id="submit" variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Formik>
        </div>
        )
        };


export default CreateConcert;
