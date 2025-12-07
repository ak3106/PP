// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useReducer } from 'react'

// import Home from '../pages/Home'
// import Products from '../pages/Products'
// import ProductDetail from '../pages/ProductDetail'
// import Services from '../pages/Services'
// import Portfolio from '../pages/Portfolio'
// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Cart from '../pages/Cart'
// import Login from '../pages/Login'
// import Navbar from '../components/Navbar'

// // ✅ CART REDUCER
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItem = state.find(
//         item => item.itemId === action.payload.itemId
//       )

//       if (existingItem) {
//         return state.map(item =>
//           item.itemId === action.payload.itemId
//             ? { ...item, quantity: item.quantity + action.payload.quantity }
//             : item
//         )
//       }

//       return [...state, action.payload]

//     case 'UPDATE_QUANTITY':
//       return state.map(item =>
//         item.itemId === action.payload.itemId
//           ? { ...item, quantity: action.payload.quantity }
//           : item
//       )

//     case 'REMOVE_ITEM':
//       return state.filter(item => item.itemId !== action.payload.itemId)

//     case 'CLEAR_CART':
//       return []

//     default:
//       return state
//   }
// }

// export default function AppRouter () {
//   // ✅ GLOBAL CART STATE
//   const [cart, dispatchCart] = useReducer(cartReducer, [])

//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path='/' element={<Home />} />

//         <Route
//           path='/products'
//           element={
//             <Products
//               cart={cart}
//               dispatchCart={dispatchCart}
//             />
//           }
//         />

//         <Route
//           path='/product/:id'
//           element={
//             <ProductDetail
//               cart={cart}
//               dispatchCart={dispatchCart}
//             />
//           }
//         />

//         <Route
//           path='/cart'
//           element={
//             <Cart
//               cart={cart}
//               dispatchCart={dispatchCart}
//             />
//           }
//         />

//         <Route path='/services' element={<Services />} />
//         <Route path='/portfolio' element={<Portfolio />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// import React from 'react'

// function AppRouter() {
//   return (
//     <div>AppRouter</div>
//   )
// }

// export default AppRouter