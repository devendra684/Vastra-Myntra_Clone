import { Box, Heading, HStack, Stack } from '@chakra-ui/layout';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from './AdminNavbar';
import { deleteUsersListData, getUsersListData } from '../Redux/Admin/Admin.action';
import UserCard from './UserCard';
import Chart from "react-apexcharts";


const UsersPage = () => {
  const UsersListData = useSelector((store)=>store.adminManager.usersListData);
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getUsersListData());
  },[])
  
  const deleteUsers=(id)=>{
    dispatch(deleteUsersListData(id)).then(()=>dispatch(getUsersListData()));
  }
 // dispatch(getUsersListData());
  let loginUsers=0
  let logoutUsers=0
  for(let i=0;i<UsersListData.length;i++){
    let el=UsersListData[i];
    if(el.isAuth===true){
    loginUsers=loginUsers+1
    }else{
      logoutUsers=logoutUsers+1
    }
  }
  
  return (
    <Box minH="100vh" bg={'gray.100'} fontFamily={'sans-serif'}>
      <AdminNavbar/>
    <Box mt={"80px"} >
      <Stack ml={'270px'} justifyContent={'center'}>
      <HStack justifyContent={'space-around'} >
      <Stack>
    <Heading mt={5} size={'lg'} fontFamily={'sans-serif'} >Total Users : {UsersListData.length} 
      </Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
      {UsersListData.length!==0 && UsersListData.map((el,i)=>(
      el.image!==""?<Avatar  key={i} src={el.image} /> :<Avatar  key={i} name={el.name} />
    ))}
</AvatarGroup>
</HStack>
    </Stack>
    <Stack>
  
    <Chart
          type="pie"
          height={450}
          series={[loginUsers,logoutUsers]}
          options={{
            noData: { text: "Unavailable" },
            stroke: {
              lineCap: "round"
            },
            colors: ['#2BA751', '#FF0000'],
            labels: ["Total Login Users", "Total Logout Users"],
          }}
          >
  </Chart>
    </Stack>
    </HStack>
    </Stack>
        <Stack ml={'440px'} spacing={10} >
          {UsersListData.length !== 0 && UsersListData.map((el, i) => (
            <UserCard key={i} {...el} deleteUsers={deleteUsers} />
          ))}
        </Stack>
    </Box>
    </Box>
  )
}

export default UsersPage;