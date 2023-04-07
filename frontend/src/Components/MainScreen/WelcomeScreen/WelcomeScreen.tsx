import React, {useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";


const WelcomeScreen = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('/api')
            .then((response) => response.json())
            .then(response => setData(response.message))
    }, [])

    return (
        <Box sx={{paddingTop: 19,}}>
            <Box sx={{m: '0 auto', width: '600px'}}>
                <p style={{fontWeight: '600', fontSize: '40px'}}>
                    Создавайте тесты и опросы или проходите готовые
                    <br/>
                    {
                        !data ? 'Loading...' : data
                    }
                    <br/>
                    1234
                </p>
            </Box>
            <Box sx={{margin: '0 auto', width: '650px'}}>
                <p style={{lineHeight: '1.5em'}}>
                    В нашем каталоге представлены тесты и опросы на разные темы, такие как: <br/>
                    <br/>
                    — подготовка к сдаче экзамена на водительские права; <br/>
                    — подготовка к сдаче сертификата 1С профессионал; <br/>
                    — проверка знаний в JavaScript. <br/>
                    <br/>
                    Чтобы ознакомиться с полным списком опросов, перейдите в каталог тестов. <br/>
                </p>
            </Box>


            <Button variant="contained" size={"large"}
                    color={"success"} sx={{display: 'flex', margin: '70px auto 20px'}}
                    className={'hover:-translate-y-1 hover:scale-110'}
            >Каталог тестов</Button>
        </Box>
    );
};

export default WelcomeScreen;