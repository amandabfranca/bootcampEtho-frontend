import React from 'react';
import login from '../../assets/icons/logo.svg';
import {LogoHome, Wrapper} from "../home/home.styled"
import {Container, Grid} from "@mui/material";

export default function Home() {
    return(
    <>
        <Container>
                <Wrapper container justifyContent={'left'}>
                    <Grid item xs={12} justifyContent ={'left'}>
                        <Grid container justifyContent={'center'}>
                            <LogoHome src={login} alt={'Netflix Logo'}/>
                            <h1>Quem está assistindo?</h1>
                        </Grid>   
                        </Grid>
                </Wrapper>
            </Container>

    </>
)}