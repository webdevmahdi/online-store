import React from 'react'
import FullCard from '../Card/Card'
import './Cardgroup.css'

function Cardgroup() {
    let products=[
        {name: 'Apple', colour: 'Black', price: 15000, image: "https://www.pexels.com/photo/close-up-photo-of-woman-in-a-spacesuit-7672275/"},
        {name: 'Samsan', colour: 'Pink', price: 14500, image: 'https://www.pexels.com/photo/woman-in-space-suit-sitting-on-floor-7671964/'},
        {name: 'Appa', colour: 'White', price: 1000, image: 'https://www.pexels.com/photo/woman-in-black-jacket-sitting-on-chair-7671971/'},
        {name: 'Jiaomi', colour: 'Red', price: 14000, image: 'https://www.pexels.com/photo/woman-in-spacesuit-sitting-on-a-metal-chair-7660837/'}
    ]
    return (
        <div className='products'>
            {
                products.map(product => <FullCard
                    product={product}
                    ></FullCard>)
            }
        </div>
    )
}

export default Cardgroup