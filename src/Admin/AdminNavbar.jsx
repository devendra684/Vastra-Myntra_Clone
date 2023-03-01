import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Image,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  AvatarBadge
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import { HiFolderAdd } from 'react-icons/hi'
import { ImMan, ImWoman } from 'react-icons/im';
import { FaChild, FaUsers } from 'react-icons/fa'
import { RiAccountPinCircleFill, RiLogoutCircleFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAdminData } from '../Redux/Admin/Admin.action';

const LinkItems = [
  { name: 'Home', icon: AiFillHome, path: '/admin-dashboard' },
  { name: 'Add Product', icon: HiFolderAdd, path: '/add-products' },
  { name: 'Men', icon: ImMan, path: '/admin-men' },
  { name: 'Women', icon: ImWoman, path: '/admin-women' },
  { name: 'Kids', icon: FaChild, path: '/admin-kids' },
  { name: 'Users', icon: FaUsers, path: '/admin-users' },
  { name: 'Account', icon: RiAccountPinCircleFill, path: '/admin-profile' },
  { name: 'Logout', icon: RiLogoutCircleFill, path: '/' }
];
//RiLogoutCircleFill
export default function AdminNavbar({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { adminData } = useSelector((store) => store.adminManager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminData());
  }, [])
  return (
    <Box border={'0px solid black'} pos={'fixed'} top={0} right={0} left={0} zIndex={999}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        border={'0px solid black'}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} name={adminData.name} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#f7f8fc', 'white')}
      borderRight="0px"
      borderRightColor={useColorModeValue('gray.300', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="14" justifyContent="space-between"  >

      <a href="/">
        <Image src="/Logo.jpg" alt='Vestra' display={{ base: 'none', md: 'flex' }} />
      </a>

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} item={link.path}>
          {link}
        </NavItem>
      ))}
    </Box>
  );
};
const NavItem = ({ icon, children, item, ...rest }) => {
  return (
    <NavLink to={item} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        _groupActive={{ color: '#990578' }}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#72749B',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children.name}
      </Flex>
    </NavLink>
  );
};
const MobileNav = ({ onOpen, name, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('#f7f8fc', 'white')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.300', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <a href="/">
        <Image 
              src={'Logo.jpg'}
              alt='Vastra' 
              width={"100px"} 
              display={{ base: 'flex', md: 'none' }} />
      </a>

      <HStack spacing={{ base: 0, md: 3 }} mr={{ base: 3, md: 8 }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BsFillBellFill />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'}
                  src={'/AdminProfile'}>
                  <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                >
                  <Text fontSize={'sm'} fontWeight={500} fontFamily={'sans-serif'}>{name}</Text>
                  <Text fontSize={'xs'} fontWeight={500} color="gray.600">
                    Admin
                  </Text>
                </VStack>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};