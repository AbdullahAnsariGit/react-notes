// import React from 'react'

// function Card() {
//     return (
//         <div>Card</div>
//     )
// }

// export default Card



import React from "react";
import placeholder from '../assets/placeholder.webp'
// GlobalCard.defaultProps = {
//     name: 'Anonymous'
// }
// function GlobalCard(props) {
//     // console.log('props',props);
//     const { name, description, price, imgUrl, tag } = props

//     return (
//         <div className='card'>
//             <img src={imgUrl ? imgUrl : placeholder} style={{ height: 150, width: 150 }} />
//             <h1>{name}</h1>
//             <h2>{`Price: ${price}`}</h2>
//             {description && <p style={{ height: 10, background: 'red', width: '100%' }}>{description}</p>}
//             <h2 style={{ backgroundColor: 'yellow' }}>{tag}</h2>
//         </div>
//     )
// }



// function CustomCard() {
//     return (
//         <div className='card'>
//             <h1>banana</h1>
//             <h2>Price: 120 rps</h2>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
//         </div>
//     )
// }

function Greeting(props) {
    const { name = "Guest", description = "no Description" } = props
    return (
        <>
            <h1>Hello, {name} </h1>
            <h2>{description}</h2>
        </>


    );
}

// Greeting.defaultProps = {
//     name: "Guest",
// };

export { Greeting }