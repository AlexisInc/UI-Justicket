
import Button from 'react-bootstrap/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import './concert-form.css'
import { Concert } from '../model/concert';

const CreateConcert =  ()=> {

    const initialFormState : Concert = {
    name: '',
    artiste: '',
    salle :'',
    places : null,
    date: null,
    price :null,

    
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
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
        artiste: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .required('Required'),
        salle: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
        places: Yup.number()
        .min(100, 'Must be 100 or more')
        .required('Required'),
        prix: Yup.number()
        .min(0, 'Must be 0 or more')
        .required('Required'),
        date: Yup.date()
        .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
        }}    
    
        >
        <Form className="needs-validation"  >
        <div className="input" ><p class="form-title">Nom du concert : </p>
        <Field placeHolder="Nom du concert" className="form-control" name="name" type="text" />
        <ErrorMessage className="invalid-feedback" name="name" />
        </div>
        <div className="input" ><p class="form-title">Artiste du concert : </p>
        <Field placeHolder="Artiste" className="form-control" name="artiste" type="text" />
        <ErrorMessage className="invalid-feedback" name="artiste" />
        </div>
        <div className="input"><p class="form-title">Salle du concert : </p>
        <Field  placeHolder="Salle"  className="form-control" name="salle" type="text" />
        <ErrorMessage className="invalid-feedback" name="salle" />
        </div>

        <div className="input"><p class="form-title">Nombre de place du concert : </p>
        <Field  placeHolder="Nombre de places"  className="form-control" name="places" type="number" />
        <ErrorMessage className="invalid-feedback" name="places" />
        </div>

        <div className="input"><p class="form-title">Date du concert : </p>
        <Field  placeHolder="Date"  className="form-control" name="date" type="Date" />
        <ErrorMessage className="invalid-feedback" name="date" />
        </div>

        <div className="input"><p class="form-title">Prix du concert : </p>
        <Field  placeHolder="Prix (XTZ)"  className="form-control" name="price" type="number" />
        <ErrorMessage className="invalid-feedback" name="price" />
        </div>
        
        
        <Button id="submit" variant="primary" type="submit">
            Créer
        </Button>
        </Form>
        </Formik>
        </div>
        )
        };


export default CreateConcert;
