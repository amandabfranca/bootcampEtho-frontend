import React from 'react';
import Button from "../../components/buttons/button/button.component";
import {Container, Grid} from "@mui/material";
import InputText from '../../components/inputs/input-text/input-text.component';
import login from '../../assets/icons/logo.svg';
import {Logo, Wrapper} from "./login.styled"
import Form from "./components/form/form.component"

export default function Login(){
    return(
        <>
            <Container>
                <Wrapper container justifyContent={'center'}>
                    <Grid item xs={3} justifyContent ={'center'}>
                        <Grid container justifyContent={'center'}>
                            <Logo src={login} alt={'Netflix Logo'}/>
                            <Form/>
                        </Grid>   
                    </Grid>
                </Wrapper>
            </Container>
         
        </>


    )
}