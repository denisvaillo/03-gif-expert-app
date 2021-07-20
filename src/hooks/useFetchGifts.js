import { useState, useEffect } from "react"
import { getGifts } from "../helpers/giphy";

export const useFetchGifts = ( category ) => {
    const [state, setState] = useState({
        gifts   : [],
        loading : true
    })
    
    useEffect( () => {
        getGifts(category).then( gifts => {
            setState({
                gifts   : gifts,
                loading : false
            })
        } );
    }, [ ]);

    return state;
}