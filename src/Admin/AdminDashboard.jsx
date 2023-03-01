import { Box, Heading, HStack, Stack } from '@chakra-ui/layout';
import { useEffect } from 'react';
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from './AdminNavbar';
import { getKidsData, getMensData, getWomensData } from '../Redux/Admin/Admin.action';
import Calendar from './Calendar';

const AdminDashboard = () => {
  const {kidsData,mensData,womensData} = useSelector((store)=>store.adminManager)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getKidsData());
    dispatch(getMensData());
    dispatch(getWomensData());
  },[])
  
  const kd =  kidsData.length;
  const md =  mensData.length;
  const wd =  womensData.length;
  //console.log(kd,md,wd);

  return (
    <Box minH="100vh" bg={'whiteAlpha.50'}  >
        <AdminNavbar/>
        
        <Box 
          marginTop={'80px'} 
          pt={30} 
          fontFamily={'sans-serif'}
          // bg={'#ffffff'} 
          padding={4} 
          width={'80%'}
        >
          
          <Box ml={'250px'} borderRadius={15} mt={1} mb={4} border='2px solid lightBlue'>
        <Chart
          type="pie"
          height={450}
          series={[kd,md,wd]}
          options={{
          noData: { text: "Unavailable" },
          stroke: {
            lineCap: "round"
          },
          radialBar: {
           // dataLabels: {
              total: {
                show: true,
                label: 'TOTAL',
              }
           // }
          },
          // dropShadow: {
          //   enabled: true,
          //       top: 0,
          //       left: 0,
          //       blur: 3,
          //       opacity: 0.5,
          //     },
          labels: [ "KIDS-PRODUCTS","MENS-PRODUCTS", "WOMENS-PRODUCTS"],
        }}
      >
        </Chart>
        
        </Box>
        <Stack bg={'#a0aec0'}  ml={'250px'} padding={5} borderRadius={15} boxShadow={'base'}
        cursor= {'pointer'} _hover={{ bg: "#ffffff", border: '2px solid lightBlue' }}>
            <Heading _hover={{ color: '#3751ff' }} color={'#373a47'} fontFamily={'sans-serif'}>Total Products :  <b>{kd+md+wd}</b></Heading> 
          </Stack>
        <HStack ml={'250px'} mt={3} pb={10} alignItems={'center'} spacing={3} >
        
          <Stack bg={'#00e396'} boxShadow={'base'} padding={4} borderRadius={15} 
              cursor= {'pointer'} _hover={{ bg: "#ffffff", border: '2px solid lightBlue' }}
          >
            <Heading _hover={{ color: '#3751ff' }} color={'#373a47'} fontWeight={'small'} fontFamily={'sans-serif'}>
                Total Mens Products: <b >{md}</b></Heading> 
          </Stack>
          <Stack bg={'#feb019'} padding={4}boxShadow={'base'} borderRadius={15}
              cursor= {'pointer'} _hover={{ bg: "#ffffff", border: '2px solid lightBlue' }}>
            <Heading _hover={{ color: '#3751ff' }} color={'#373a47'} fontWeight={'normal'} fontFamily={'sans-serif'}>Total Womens Products   <b>{wd}</b></Heading> 
          </Stack>
          <Stack bg={'#008ffb'} padding={4}boxShadow={'base'} borderRadius={15}
              cursor= {'pointer'} _hover={{ bg: "#ffffff", border: '2px solid lightBlue' }}>
            <Heading _hover={{ color: '#3751ff' }} color={'#373a47'} fontWeight={'normal'} fontFamily={'sans-serif'}>Total Kids Products   <b>{kd}</b></Heading> 
          </Stack>
          </HStack>
        </Box>
        <Box width={'20%'} mt={'59px'} ml={'250px'} borderRadius={15} padding={1} border='2px solid lightBlue' paddingTop={'5'}  pos={'fixed'} top={39.888} left={940} zIndex={999}>
        <Calendar  />
        </Box>
        
    </Box>
  )
}

export default AdminDashboard;
