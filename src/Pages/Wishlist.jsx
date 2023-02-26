import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlistData } from '../Redux/Wishlist/Wishlist.action'
import LoadingPage from './LoadingPage'
import PageNotFound from './PageNotFound'
import WishlistCard from '../Components/WishlistCard'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Wishlist = () => {
    const {loading , error ,wishlistData} =useSelector(store=>store.wishlist)
    const dispatch = useDispatch()
//console.log("wishlist:", wishlistData)

useEffect(()=>{
    dispatch(fetchWishlistData())
},[dispatch])

if(loading){
    return <><LoadingPage/></>
}
if(error){
    return <><PageNotFound/></>
}
  return (
    <div >
      <Navbar/>
        <Box  textAlign={"left"} ml={'44'}  px={4} mt={'7rem'} color={"gray.600"} fontSize={"1.2rem"}>
          <Text px={4} border="1px solid grey" borderRadius={15}  fontWeight={600} color={"pink.500"} display={"inline-block"}>
            My WishList : -
              <span style={{color:'gray'}} >   {wishlistData.length} 
                  Items
              </span>
          </Text>
        </Box>
        <Box ml={'44'}>
            
            <Grid  gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}} justifyContent={'center'} >
                {
                    wishlistData?.map((wish)=>(
                        <WishlistCard key={wish} prod={wish}/>
                    ))
                }

            </Grid>
        </Box>
      <Footer/>  
    </div>
  )
}

export default Wishlist