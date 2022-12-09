
import { Heading, Box, Image, Stack, Button, Input } from '@chakra-ui/react';
import styles from "./Home.module.css"

const Home = () => {
  return (
<div >


    <Box border='1px solid white' borderRadius="10px" height="460px" className={styles.box} maxW="400px">
<Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'>
</Image>
<Stack mt='6' spacing='3'>
      <Heading  size='md'>SPORTOFI BOX</Heading>
      <div className={styles.btn}>
      <Input textAlign={"center"} maxW="70px" value={0} />
      </div>
      <div className={styles.btn}>
      <Button>UNBOX</Button>
      </div>   
    </Stack> 
       </Box>
        </div>
  );
};

export default Home;
