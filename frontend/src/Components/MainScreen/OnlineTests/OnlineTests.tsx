import React from 'react';
import CatalogueItem from "../../Catalogue-item/Catalogue-item";
import {Box} from "@mui/material";
import {useAppSelector} from "../../../hooks";
import classes from './OnlineTests.module.css';

const pBoxStyles = {
    margin: '0 20px',
    padding: '0 10px',
    width: 'auto',
    height: '45px'
}


const OnlineTests = () => {
    const onlineTestsState = useAppSelector(store => store.onlineTestsStore.value)

    return (
        <Box sx={{m: '0 auto', width: '1200px',}}>
            <Box sx={{m: '0 auto', width: '600px'}}>
                <p className={classes.pTitle}>
                    Онлайн-тесты
                </p>
            </Box>
            <Box sx={{m: '0 auto', display: 'flex', width: '1024 px', borderBottom: '1px solid #e6e9ed'}}>
                <Box sx={pBoxStyles}>
                    <p className={classes.pCategory}>Тесты по 1С</p>
                </Box>
                <Box sx={pBoxStyles}>
                    <p className={classes.pCategory}>Тесты по Яндекс Директ</p>
                </Box>
                <Box sx={pBoxStyles}>
                    <p className={classes.pCategory}>Тесты по JavaScript</p>
                </Box>
                <Box sx={pBoxStyles}>
                    <p className={classes.pCategory}>Тесты по Английскому языку</p>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {onlineTestsState.map((item, index) =>
                    <CatalogueItem item={item} key={index}/>
                )}
            </Box>
        </Box>
    );
};

export default OnlineTests;