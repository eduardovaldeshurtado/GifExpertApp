/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { GifItem } from './GifItem'
import { useFetchGifts } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifts(category); //test


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />                        
                    ))
                }
            </div>
        </>        
    )
}