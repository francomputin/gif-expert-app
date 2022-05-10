import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category).then(images => {
            setState({data: images, loading: false});
        })

        // setTimeout(() => {
        //     getGifs(category).then(images => {
        //         setState({data: images, loading: false});
        //     })
        // }, 3000);

    }, [category])

    return state;
}