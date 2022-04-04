import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { useLoading, useSignStore } from "../Store/Store";
import PuffLoader from "react-spinners/PuffLoader"


const Discription = () => {
    const data = useSignStore(state => state.data)
    const loading = useLoading(state => state.loading)

    return(
        <>
        {
            
            loading ? 
            <div className="load">
            <PuffLoader 
            color="#175571"
             loading={loading} size={100}
            /> 
            </div>
        :
        <div>
            <Present 
            title='Description'
            body={data.description}
            />
            <Present 
            title='Compatibility'
            body={data.compatibility}
            />
            <Present 
            title='Mood'
            body={data.mood}
            />
            <Present 
            title="Color"
            body={data.color}
            />
            <Present
            title="Lucky number"
            body={data.lucky_number}
            />
            <Present
            title="Lucky time"
            body={data.lucky_time}
            />
        </div>}
        </>
    )
}

const Present = ({title, body}) => {
    return(
        <Card>
               <CardHeader 
               title={title}
               />
               <CardContent>
                   <Typography>
                     {body}
                   </Typography>
               </CardContent>
          </Card> 
    )
}

export default Discription;