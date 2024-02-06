import React from "react";
import { Box, Text } from "rebass";
import { Input } from "@rebass/forms";

function AddSong() {
  const container = ` width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;`;
  const holder = ` margin-bottom: 20px; width: 50%; display: flex; flex-direction: column;`;
  const label = ` margin-bottom:10px;`;
  return (
    <Box css={container}>
      <Box css={holder}>
        <Text css={label}>Title</Text>
        <Input
          type="text"
          placeholder="Title"
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box css={holder}>
        <Text css={label}>Image</Text>
        <Input
          type="text"
          placeholder="Image url"
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box css={holder}>
        <Text css={label}>Artist</Text>
        <Input
          type="text"
          placeholder="Artist"
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box css={holder}>
        <Text css={label}>Album</Text>
        <Input
          type="text"
          placeholder="Album"
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box css={holder}>
        <Text css={label}>Genre</Text>
        <Input
          type="text"
          placeholder="Genre"
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box css={holder}>
        <Text css={label}>Description</Text>
        <Input
          type="text"
          placeholder="Description"
          //   onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "5px",
          }}
        />
      </Box>
    </Box>
  );
}

export default AddSong;
