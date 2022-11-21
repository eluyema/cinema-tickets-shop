import { Container, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Header from '../Header/Header';
import armchairs from '../../public/armchairs.jpg';
import Typography from '@mui/material/Typography';

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout = ({children}:BaseLayoutProps) => {
    console.log(armchairs)
    return(
    <Box sx={{minHeight: '100vh', backgroundColor: "primary.light"}}>
        <Header />
        <Container maxWidth="lg">

                <Typography variant="h5" component="p" sx={{ color: 'white' }}>
                    Мультикіно - мереша кінотетатрів України. Саме тут наші почтені гості можуть на м'яких кріслах та диванах подивитися кінофільми будь-яких жанрів, кіностудій. Також наші гостинні зали мають кінокафе, де зібрані найрізноманітніші страви з усіх країн.
                </Typography>
            {/* <Box sx={{width:'100%', height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${armchairs.src})`}}>
            </Box> */}
        </Container>
        <Container maxWidth="md">
            {children}
        </Container>
    </Box>)
}

export default BaseLayout;