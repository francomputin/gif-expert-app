import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['Aquaria', 'Jujubee', 'Trinity The Tuck']
    const [categories, setCategories] = useState(['Aquaria'])

    return (
        <div>
            <h2> My favorite queens </h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) => {
                        console.log('aqui')
                        return <GifGrid key = { category } category = {category}/>
                    })
                }
            </ol>
        </div>
    )
}