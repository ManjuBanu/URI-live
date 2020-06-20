import React from 'react';
import { GroupContainer,
  FormInputContainer,
  FormInputLabel} from './style-form-component';

const FormInput = ({handleChange , label , ...formProps}) =>(
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...formProps}/>
        {label ? (
          <FormInputLabel className={formProps.value.length ? 'shrink' : ''}>
            {label}
          </FormInputLabel>
        ) : null}
    </GroupContainer>  
);

export default FormInput;



// {label ? (
//     <label 
//         className={`${formProps.value.length ? 'shrink' : ''
//     }form-input-label`}>
//     {label}
//     </label> ) : null}