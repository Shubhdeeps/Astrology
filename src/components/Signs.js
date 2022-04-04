import { Grid, Paper } from "@material-ui/core";
import { useSigns } from "../Store/Store";


const Signs = () => {
    const signs = useSigns(state => state.signs)
    const signDate = useSigns(state => state.signDate)
    let single = ''
    return(
        <Grid 
        container
        direction="row"
        className="signs"
        justifyContent="center"
        sm={12}
        >
           {signs.map(x => {
               single = signDate.filter(y => {
                   return(y.Name === x)
               })
               return(
                   <Grid key={x} >
                       <Paper className='sign'>
                         <img src={`https://img.icons8.com/ios-glyphs/30/000000/${x.toLowerCase()}.png`} alt="sign"/>
                           {x}
                         <p>{single[0].Date}</p>  
                       </Paper>
                   </Grid>
               )
           })}
        </Grid>
    )
}

export default Signs;