
import Button from 'react-bootstrap/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import './concert-form.css'
import { Concert } from '../model/concert';

const CreateConcert =  ()=> {

    const initialFormState : Concert = {
        title: "",
        artist: "",
        capacity: 0,
        date: new Date(),
        place: "",
        priceTezos: 0,
        contractAddress: null

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
        title: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
        artist: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .required('Required'),
        salle: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
        place: Yup.number()
        .min(100, 'Must be 100 or more')
        .required('Required'),
        priceTezos: Yup.number()
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
        <div className="input" ><p className="form-title">Nom du concert : </p>
        <Field placeHolder="Nom du concert" className="form-control" name="title" type="text" />
        <ErrorMessage className="invalid-feedback" name="tile" />
        </div>
        <div className="input" ><p className="form-title">Artiste du concert : </p>
        <Field placeHolder="Artiste" className="form-control" name="artist" type="text" />
        <ErrorMessage className="invalid-feedback" name="artist" />
        </div>
        <div className="input"><p className="form-title">Salle du concert : </p>
        <Field  placeHolder="Salle"  className="form-control" name="salle" type="text" />
        <ErrorMessage className="invalid-feedback" name="salle" />
        </div>

        <div className="input"><p className="form-title">Nombre de place du concert : </p>
        <Field  placeHolder="Nombre de places"  className="form-control" name="place" type="string" />
        <ErrorMessage className="invalid-feedback" name="place" />
        </div>

        <div className="input"><p className="form-title">Date du concert : </p>
        <Field  placeHolder="Date"  className="form-control" name="date" type="Date" />
        <ErrorMessage className="invalid-feedback" name="date" />
        </div>

        <div className="input"><p className="form-title">Prix du concert : </p>
        <Field  placeHolder="Prix (XTZ)"  className="form-control" name="priceTezos" type="number" />
        <ErrorMessage className="invalid-feedback" name="priceTezos" />
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
