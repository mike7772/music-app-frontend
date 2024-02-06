import { Flex, Box, Text } from "rebass";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Sidebar = (props: any) => {
  const navigate = useNavigate();
  const sideBarStyle = `
width: 25%;
min-height: 100vh;
padding-top: 20px;
font-weight: 600;
`;

  const sideBarBox = `
width: 100%;
text-align: center;
cursor: pointer;
&:hover {
  background-color: #e8ebf8;
}
`;

  return (
    <Flex
      css={sideBarStyle}
      flexDirection="column"
      bg={"white"}
      color={"#000"}
      pt={5}
    >
      <Box
        css={sideBarBox}
        my={1}
        py={2}
        onClick={() => {
          navigate("/");
        }}
      >
        <Text>Home</Text>
      </Box>
      <Box
        css={sideBarBox}
        my={1}
        py={2}
        onClick={() => {
          navigate("/list");
        }}
      >
        <Text>Album</Text>
      </Box>
      <Box
        css={sideBarBox}
        my={1}
        py={2}
        onClick={() => {
          navigate("/list");
        }}
      >
        <Text>Artist</Text>
      </Box>
      <Box
        css={sideBarBox}
        my={1}
        py={2}
        onClick={() => {
          navigate("/list");
        }}
      >
        <Text>Genre</Text>
      </Box>
    </Flex>
  );
};
