import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Discription from "./Discription";
import Signs from "./Signs";
import { useSignStore, useLoading } from "../Store/Store";
import Extension from "./Extension";


const Body = () => {

    const [isSwitch, setSwitch] = useState(false);
    const [selected, setSelected] = useState('');

    const data = useSignStore(state => state.data)
    


    const setFalse = useLoading(state => state.setFalse)

    useEffect(() => {
        setFalse();
    }, [data, setFalse])

   
    return(
      <Container maxWidth='lg'>
          <div className="body-component">
            <div  className={ selected ? "body-selected" : "body" }> 
            <Typography 
            color='primary'
            variant="h3" 
            >
                ASTROLOGY
            </Typography>
            <div className="List">
                <Button 
                variant="outlined"
                onClick={()=> setSwitch(!isSwitch)}
                endIcon = { isSwitch ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon /> }
                > 
                    { selected ? selected :  "Select your zodic sign" }
                </Button>
                { isSwitch ? <div className="list-extension">
                   <Extension isSwitch={isSwitch} setSwitch={setSwitch} setSelected={setSelected} />
                 </div> : null }
            </div>
            </div> 
            <div className="discription">
                {selected ? <Discription /> : null}
            </div>  
            <Signs />
          </div>
      </Container>
    )
}



export default Body;