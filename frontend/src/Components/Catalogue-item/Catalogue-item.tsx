import React from 'react';
import classes from "./Catalogue-item.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faHeart, faUser, faComment} from '@fortawesome/free-regular-svg-icons';
import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";
import {ICatalogue} from "../../models";

const itemMainStyle = {
    margin: '10px',
    padding: '20px',
    display: 'flex',
    width: '324px',
    height: '210px',
    borderRadius: '15px',
    backgroundColor: '#fbfbfb',
    boxShadow: '0px 0px 10px #ab9f9f',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 0px 10px #277795'
    }
}

interface CatalogueItemProps {
    item: ICatalogue
}

const CatalogueItem = ({item}: CatalogueItemProps) => {
    return (
        <Box sx={itemMainStyle}>
            <div className={classes.info}>
                <div className={classes.title}>
                    <NavLink to="" className={classes.aMinStyle}>{item.title}</NavLink>
                </div>
                <div className={classes.author}>
                    <NavLink to="">{item.author}</NavLink>
                </div>
                <div className={classes.items}>
                    <div className={classes.likesQty}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                    <div className={classes.donesQty}>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className={classes.commentsQty}>
                        <FontAwesomeIcon icon={faComment}/>
                    </div>
                </div>
                <div className={classes.price}>
                    {item.price === "free" ? "Бесплатно" : item.price + ' ₽'}
                </div>
            </div>
            <div>
                <div className={classes.favorites}>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <div className={classes.logo}>
                    <img src={item.logo} alt=""/>
                </div>
            </div>

        </Box>
    );
};

export default CatalogueItem;