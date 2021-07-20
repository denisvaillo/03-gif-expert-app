import React, { useState, useEffect } from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category }) => {

    const { gifts, loading } = useFetchGifts(category);

    console.debug(gifts);
    console.debug(loading);

    /*
    const [gifts, setGifts] = useState([]);
    
    useEffect( () => {
        getGifts(category).then( setGifts );
    }, [ category ]);
    */

    return (
        <>
            <h3>{ category } </h3>
            <div className="cards">
                { 
                    loading 
                        ? 
                            <div class="animate__animated animate__flash">Cargando</div>
                        : (
                            gifts.map( gift => (
                                <GifGridItem key={gift.id} { ...gift }/>) 
                            )
                        )
                }
            </div>
        </>
    )
}

export default GifGrid
