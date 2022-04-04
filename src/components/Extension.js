import { Button, ButtonGroup } from "@material-ui/core";
import { Service } from "../Service/Services";
import { useLoading, useSigns, useSignStore } from "../Store/Store";

const Extension = ({isSwitch, setSwitch, setSelected}) => {

    const setData = useSignStore(state => state.setData)
    const setTrue = useLoading(state => state.setTrue)

    const handleClick = (e) => {
        setSwitch(!isSwitch);
        setSelected(e.target.innerText)
        setTrue()
        Service(e.target.innerText.toLowerCase(), setData)
    }
    const signs = useSigns(state => state.signs)

    return(
        <ButtonGroup 
         orientation="vertical"
         variant="contained"
         >
         {signs.map(x => {
            return(
                <Button 
                onClick={(e) => handleClick(e)} 
                key={x}>
                    <img id='sign-image' src={`https://img.icons8.com/ios-glyphs/30/000000/${x.toLowerCase()}.png`} alt="sign"/>
                    {x}
                </Button>
            )
         })}
        </ButtonGroup>
    )
}

export default Extension;