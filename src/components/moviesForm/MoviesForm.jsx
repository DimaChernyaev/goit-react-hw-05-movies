import { Formik } from 'formik';
import { SearchForm, Input, Label, Button } from './MoviesForm.styled';

const MoviesForm = ({ onSubmitForm }) => {
  const initialValues = {
    searchMovie: '',
  };

  function submitForm(values, { resetForm }) {
    onSubmitForm(values);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      <SearchForm>
        <Label>
          <Input type="text" name="searchMovie"></Input>
          <Button type="submit">Search</Button>
        </Label>
      </SearchForm>
    </Formik>
  );
};

export default MoviesForm;
