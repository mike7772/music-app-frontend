import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Button } from "rebass";
import { Input } from "@rebass/forms";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch, selectSong } from "../state/slice/songSlice";
import { useNavigate } from "react-router-dom";

function Songs() {
  const songs = useSelector(selectSong);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchquery] = useState("");
  // const handleSearch = (substring: string) => {
  //   setSearchquery(substring);
  // };
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  console.log("first ============>",songs)

  const container = `
    width: 100%;
    `;

  const upperContent = ` height: 200px; width: 90%; display: flex; justify-content: space-between; align-items: center; border-radius: 10px; `;
  const imageStyle = ` height: 120px; width: 120px; border-radius: 10px; margin-right: 40px;`;
  const addButtonStyle = `height: 120px; font-weight: 700; display: flex; justify-content: center; align-items: center; border: 1px solid black;`;
  const statStyle = `display: flex; justify-content: space-between; align-items: center;`;
  const statLabel = ` font-weight: 700;`;
  return (
    <Flex css={container} bg={"#e8ebf880"} flexDirection={"column"} pl={5}>
      <Box css={upperContent} mt={4} p={5} bg={"white"}>
        <Box
          css={`
            display: flex;
          `}
        >
          <Image
            css={imageStyle}
            src="./homepage.jpg"
          />

          <Box css={statStyle}>
            <Text css={statLabel} mx={2}>
              Songs{" "}
              <Text
                css={`
                  text-align: center;
                `}
              >
                23
              </Text>
            </Text>
            <Text css={statLabel} mx={2}>
              Artists{" "}
              <Text
                css={`
                  text-align: center;
                `}
              >
                23
              </Text>
            </Text>
            <Text css={statLabel} mx={2}>
              Album{" "}
              <Text
                css={`
                  text-align: center;
                `}
              >
                23
              </Text>
            </Text>
            <Text css={statLabel} mx={2}>
              Genre{" "}
              <Text
                css={`
                  text-align: center;
                `}
              >
                23
              </Text>
            </Text>
          </Box>
        </Box>
        <Button css={addButtonStyle} bg={"white"} onClick={()=>{
          navigate("/add-song");

        }}>
          <Text color={"#000"} width={1 / 2}>
            Add a Song
          </Text>
        </Button>
      </Box>
      <Box>
        <Input
          type="text"
          placeholder="Search Songs..."
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            backgroundColor: "white",
            color: "#000",
            border: "1px solid #fff",
            borderRadius: "5px",
            padding: "10px",
            width: "40%",
            marginTop: "2%",
            boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>
      <Box>
        <Text
          css={`
            font-size: 20px;
            font-weight: 700;
          `}
          my={3}
        >
          Songs
        </Text>
        {songs?.data?.map((row: any, index: number) => {
          return (
            <Box
              key={index}
              css={`
                width: 90%;
                display: flex;
                justify-content: space-between;
                border-radius: 5px;
                &:hover {
                  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
                }
              `}
              my={3}
              py={2}
              bg={"white"}
            >
              <Box
                css={`
                  display: flex;
                `}
              >
                <Image
                  mx={2}
                  mt={1}
                  css={`
                    width: 40px;
                    height: 40px;
                  `}
                  src="https://source.unsplash.com/random/1280x720"
                />
                <Box>
                  <Text
                    css={`
                      font-weight: 700;
                    `}
                  >
                    {row.title}
                  </Text>
                  <Box
                    css={`
                      display: flex;
                    `}
                  >
                    <Text
                      css={`
                        font-size: 13px;
                        margin-right: 10px;
                      `}
                    >
                      {row.artist}
                    </Text>
                    <Text
                      css={`
                        font-size: 13px;
                      `}
                    >
                      {row.album}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                css={`
                  display: flex;
                  align-items: center;
                `}
                mr={2}
              >
                <Text mx={2}>
                  <CiEdit color="blue" />
                </Text>
                <Text mx={2}>
                  <MdDelete color="red" />
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}

export default Songs;
