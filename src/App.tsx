import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/sidebar";
import { Box, Flex, Text } from "rebass";
import Songs from "./pages/songs";
import List from "./pages/list";
import AddSong from "./pages/addSong";

function App() {


  return (
    <BrowserRouter>
      <Flex>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/list" element={<List />} />
          <Route path="/add-song" element={<AddSong />} />
          <Route path="/update-song" element={<Songs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
}

export default App;

const NotFound = () => {
  return (
    <Flex
      css={`
        justify-content: center;
        align-items: center;
      `}
      width={1}
      flexDirection={"column"}
    >
      <Box
        css={`
          text-align: center;
        `}
      >
        <Text
          css={`
            font-size: 64px;
            font-weight: 700;
          `}
        >
          404
        </Text>
        <Text
          css={`
            font-size: 20px;
          `}
        >
          Page not found!
        </Text>
      </Box>
    </Flex>
  );
};
