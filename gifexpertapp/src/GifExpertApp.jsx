import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['pepe']);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);

        //setCategories(cat => [...categories, cat]);

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    //console.log(categories);

    return (
        <div>
            <h1>GifExpertApp</h1>  

            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={value => onAddCategory(value)}
            />

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category} />
            ))}
        </div>
    )
};
