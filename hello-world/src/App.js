// import React from "react";

// // const Header = () => {
// //   return (
// //     <div style={{ width: '70%', height: 70, background: 'green', display: 'flex', justifyContent: 'space-between', padding: 10 }}>
// //       <h1>Logo</h1>
// //       <h2>Title</h2>
// //     </div>
// //   )
// // }

// // const Content = () => {
// //   return (
// //     <div style={{ width: '70%', height: 70, background: 'red', display: 'flex', justifyContent: 'space-between', padding: 10 }}>
// //       <h1>Content</h1>
// //     </div>
// //   )
// // }

// // function Card() {
// //   return (
// //     <div className='card'>
// //       <h1>Mango</h1>
// //       <h2>Price: 120 rps</h2>
// //       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
// //     </div>
// //   )
// // }

// // const Card = () => {
// //  return (
// //     <div className='card'>
// //       <h1>Mango</h1>
// //       <h2>Price: 120 rps</h2>
// //       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
// //     </div>
// //   )
// // }

// import "./App.css";
// import { Greeting } from "./components/Card";
// import mango from "./assets/mango.jpg";
// import apple from "./assets/apple.jpg";

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       {/* Without using component */}
//       {/* <div className='card'>
//         <h1>Mango</h1>
//         <h2>Price: 120 rps</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
//       </div>
//       <div className='card'>
//         <h1>Mango</h1>
//         <h2>Price: 120 rps</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
//       </div>
//       <div className='card'>
//         <h1>Mango</h1>
//         <h2>Price: 120 rps</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
//       </div>
//       <div className='card'>
//         <h1>Mango</h1>
//         <h2>Price: 120 rps</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
//       </div>
//       <div className='card'>
//         <h1>Mango</h1>
//         <h2>Price: 120 rps</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, iure excepturi ea distinctio modi voluptate aut id dignissimos voluptatem dolores recusandae ipsum assumenda consequuntur suscipit! Veritatis quas eaque totam.</p>
//       </div> */}
//       {/* With using component */}

//       {/* <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card /> */}

//       {/* <GlobalCard tag="#abc" price="120 Rps" />
//       <GlobalCard name="Orange" price="80 Rps" description="Xyz" />
//       <GlobalCard name="Apple" price="80 Rps" description="Abc" imgUrl={apple} /> */}

//       {/* <Greeting name="Alex  "/> */}
//       <Product />
//     </>
//   );
// }

// export default App;

import React from "react";

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>
//     </div>
//   );
// }
import Header from "./components/Header";
import CCard from "./components/CCard";

function App() {
  return (
    <div>
      <Header />
      {/* <Header title="About" title2="Intro" />
      <Header title="Contact Us" title2="Intro 2" />
      <Header /> */}
      <CCard title="Card 1" />
      <CCard title="Card 2" />
      <CCard title="Card 3" />
      <CCard title="Card 4" />
    </div>
  );
}

export default App;
