import React, {useState} from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";



export default function Form() {
    const [data, setData] = useState( { email: '', password: ''})

    const handleChange = (event: any) => setData (prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
    }))
    
    console.log(data, 'data')

    return(
        <>
            <InputText type={'text'} placeholder={'E-mail'} name={'email'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={handleChange}/>
            <Button primary>Entrar</Button>  
        </>
        
    )
}