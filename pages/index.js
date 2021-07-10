import Head from "next/head";
import {
  Box,
  Grid,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuth,
  setClassmates,
  setCollege,
  setSocket,
  setUser,
} from "../redux/actions/actions";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { io } from "socket.io-client";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function Home() {
  const [loginData, setLoginData] = useState({
    college: "",
    regdNo: "",
    password: "",
  });
  let global_state = useSelector((state) => state);
  let dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  let isPageWide = useMediaQuery("(max-width: 651px)");
  let router = useRouter();
  useEffect(() => {
    if (global_state.auth) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <Box
      bg="#AE0032"
      overflow="hidden"
      w="100%"
      style={{
        height: "100vh",
      }}
      color="white"
    >
      <Head>
        <title>Welcome to CRUx Social</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        </style>
      </Head>
      <Grid gap="1vh">
        <Box w="100%" h="7vh">
          <Flex>
            <Box pt={2}>
              <img
                src="/cru_auto_x2.png"
                style={{
                  height: "6vh",
                }}
              />
            </Box>
          </Flex>
        </Box>
        <Flex
          w="100%"
          h="82vh"
          justify="center"
          direction="column"
          align="center"
        >
          <Flex
            m={3}
            w="90%"
            h={!isPageWide ? "10vh" : "0"}
            justify="center"
            align="center"
          >
            <Text
              pt={1}
              pr={2}
              style={{
                fontFamily: "Archivo Black, sans-serif",
                fontSize: !isPageWide ? "5vw" : "0",
                color: "#FFFFFF",
              }}
            >
              WELCOME TO&nbsp;
            </Text>
            <img
              src="/cru_auto_x2 2.png"
              style={{
                height: !isPageWide ? "5vw" : "0",
              }}
            />
          </Flex>
          <Box
            m={5}
            w="90vw"
            h="60rem"
            bg="#FBFBFB"
            borderRadius="0 0 28px 28px"
            boxShadow="dark-lg"
            style={{
              maxWidth: "31rem",
              maxHeight: "27rem",
            }}
          >
            <Flex
              w="100%"
              h="10vh"
              bg="#77000A"
              justify="center"
              align="center"
            >
              <Text
                style={{
                  fontFamily: "Architects Daughter, cursive",
                  fontSize: !isPageWide ? "2rem" : "1.5rem",
                  color: "#FFFFFF",
                }}
              >
                Log into your institute
              </Text>
            </Flex>
            <Flex direction="column" m={5} p={3} alignItems="center">
              <FormControl id="university" isRequired>
                <FormLabel color="#581845">University/College</FormLabel>
                <Select
                  onChange={(e) => {
                    setLoginData({ ...loginData, college: e.target.value });
                  }}
                  value={loginData.college}
                  color="black"
                  placeholder="Select College"
                >
                  <option value="ITER">ITER,SOA University</option>
                  <option value="KIIT">KIIT University</option>
                </Select>
              </FormControl>
              <FormControl mt={1} id="username" isRequired>
                <FormLabel color="#581845">Registration No.</FormLabel>
                <Input
                  onChange={(e) => {
                    setLoginData({ ...loginData, regdNo: e.target.value });
                  }}
                  color="black"
                  placeholder="Registration No."
                />
              </FormControl>
              <FormControl mt={1} id="password" isRequired>
                <FormLabel color="#581845">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value });
                    }}
                    color="black"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      color="black"
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Link href="/dashboard">
                <Button
                  onClick={() => {
                    axios
                      .post(
                        `${process.env.BACKEND_URL}/api/v1/auth/login`,
                        loginData
                      )
                      .then((res) => {
                        if (res.data.res) {
                          document.cookie = "jwt=" + res.data.jwt;
                          dispatch(setUser(res.data.userdata));
                          let socket = io(`${process.env.BACKEND_URL}`, {
                            transports: ["websocket"],
                          });
                          dispatch(setSocket(socket));
                          dispatch(setAuth(true));
                          dispatch(setCollege(res.data.college));
                          socket.emit("USER_ID", res.data.userdata._id);
                          axios
                            .post(
                              `${process.env.BACKEND_URL}/api/v1/classmates/getClassmates`,
                              res.data.userdata
                            )
                            .then((classRes) => {
                              dispatch(setClassmates(classRes.data.classmates));
                            })
                            .catch((err) => console.log(err));
                          console.log(res.data.msg);
                        } else {
                          console.log(res.data.msg);
                        }
                      })
                      .catch((err) => console.log(err));
                  }}
                  shadow="lg"
                  m={5}
                  _hover={{ bg: "#600008" }}
                  bg="#77000A"
                  w="10rem"
                  borderRadius="27px"
                  color="#FFFFFF"
                  variant="solid"
                >
                  LOGIN
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Flex h="10vh" justify="center" align="center">
          <Text mr={1} fontWeight="900">
            Powered By
          </Text>
          <Text fontWeight="300">The Coterie CRUx</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
