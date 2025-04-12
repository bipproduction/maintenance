"use client";
import { Box, Card, Container, Stack } from "@mantine/core";
import Maintenance from "./_componets/Maintenance";

export default function Home() {
  return (
    <Container fluid>
      <Stack align="center">
        <Card>
          <Maintenance />
        </Card>
        <Box h={"460"}>
          <iframe
            src="https://aaarafat.github.io/JS-Flappy-Bird/index.html"
            style={{
              overflow: "hidden",
              height: "100%",
              width: "100%",
              backgroundColor: "#000",
              border: "0px solid #000",
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
