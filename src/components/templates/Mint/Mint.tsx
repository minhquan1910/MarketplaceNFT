import {  Box, Image, Stack, Text } from '@chakra-ui/react';
import { Col, Row, Space, Button } from 'antd';
import {FC } from 'react';
import styles from './Mint.module.css';
import { IMint } from './types';

const Mint: FC<IMint> = () => {
 
  
  return (
    <div>
      <div>
        <Text className={styles.title}>Guardians of Galaxy</Text>
      </div>
      <div>
        <Text className={styles.subTitle}>
          Created by a <span>Manahubs</span>
        </Text>
      </div>
      <div className={styles.content}>
      <Row  gutter={{ xs: 12, sm: 32, xl: 64 }}>
            <Col>
              <Space direction="vertical" size={0}>
                <span
                  className={styles.number}
                  style={{ fontFamily: "GILROY " }}
                >
                  9,999

                </span>
                <span
                  className={styles.attr}
                  style={{ fontFamily: "GILROY " }}
                >
                  Items
                </span>
              </Space>
            </Col>
            <Col>
              <Space direction="vertical" size={0}>
                <span
                  id="owners"
                  className={styles.number}
                  style={{ fontFamily: "GILROY " }}
                >
                  2,000

                 
                </span>
                <span
                  className={styles.attr}
                  style={{ fontFamily: "GILROY " }}
                >
                  Owner
                </span>
              </Space>
            </Col>
            <Col>
              <Space direction="vertical" size={0}>
                <span
                  className={styles.number}
                  style={{ fontFamily: "GILROY " }}
                >
                  <Space>
                   <div>
                    <Image style={{width: 25, height: 25}} src="../../../../public/images/BnbPrice.png" alt="" />
                   </div>
                    0.5
                  </Space>
                </span>
                <span
                  className={styles.attr}
                  style={{ fontFamily: "GILROY " }}
                >
                  Floor Price
                </span>
              </Space>
            </Col>
            <Col>
              <Space direction="vertical" size={0}>
                <span
                  id="volumTrade"
                  className={styles.number}
                  style={{ fontFamily: "GILROY " }}
                >
                  1,000 BNB
                  
                </span>
                <span
                  className={styles.attr}
                  style={{ fontFamily: "GILROY " }}
                >
                  Volume Traded
                </span>
              </Space>
            </Col>
          </Row>
      </div>
          <div className={styles.desc}>
            <Text>
            In the world of 2022, everything in the world became chaotic, wars of epidemics, economic crises, and the collapse of the world's financial market. The New World MANAHUBS was born with the aim of bringing together people from all over the world towards a new era of escaping poverty and restructuring the global financial system.
            </Text>
          </div>
      <div>
        <Box mt={20} border="1px solid white" borderRadius="10px" height="460px" className={styles.box} maxW="400px">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          ></Image>
          <Stack mt="6" spacing="3">
          <div className={styles.content1}>
        <div className={styles.title} style={{ fontFamily: "GILROY " }}>
          Magic Box
        </div>
        <div className={styles.byAuthor} style={{ fontFamily: "GILROY " }}>
          by <span style={{ fontFamily: "GILROY " }}>Manahubs</span>
        </div>
          <>
            <form>
              <Button
                className={styles.exploreBtn}
                style={{
                  width: "15%",
                  textAlign: "center",
                  margin: " 10px",
                  color: " #ff9900",
                  border: "solid 1px #0e0a35",
                  borderRadius: "10px",
                  fontSize: "medium",
                }}
              >
                -
              </Button>
              <input
                type="number"
                id="inputAmount"
                placeholder="Amount"
                pattern="[0-9]*"
                style={{
                  width: "20%",
                  height: "25px",
                  textAlign: "center",
                  margin: " 10px",
                  color: " #ff9900",
                  border: "solid 1px #0e0a35",
                  borderRadius: "10px",
                  fontSize: "medium",
                }}
             
              />
              <Button
                className={styles.exploreBtn}
                style={{
                  fontFamily: "GILROY ",
                  width: "15%",
                  textAlign: "center",
                  margin: " 10px",
                  color: " #ff9900",
                  border: "solid 1px #0e0a35",
                  borderRadius: "10px",
                  fontSize: "medium",
                }}
              >
                +
              </Button>
            </form>
            <Button
              className={styles.exploreBtn}
       
            >
              BUY
            </Button>
          </>
         
        
      </div>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default Mint;
