"use client";
import { Stack, Text } from "@mantine/core";

export default function Home() {
  return (
    <Stack h={"100vh"} align="center">
      <Text size="3rem">Maintenance !</Text>
      <iframe
        src="https://aaarafat.github.io/JS-Flappy-Bird/index.html"
        style={{ overflow: "hidden", height: "100%", width: "100%" }}
      />
    </Stack>
  );
}
