import {
  Box,
  Dialog,
  DialogTitle,
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [isLoginOpen]);

  return (
    <Box height="100%">
      <Grid zIndex={999} bottom="20%" position="fixed" top="55%" left="5%">
        <Grid item xs={10} sm={12}>
          <img
            src="/alontrus.png"
            alt="logo"
            onClick={() => setIsLoginOpen(true)}
            width="100%"
          ></img>
        </Grid>
      </Grid>
      <Box position="fixed" zIndex={999} bottom="15px" left="0" width="100%">
        <Typography
          component="div"
          variant="body-2"
          align="center"
          fontStyle="italic"
          color="white"
        >
          Click anywhere to login
        </Typography>
      </Box>
      <video
        onClick={() => setIsLoginOpen(true)}
        autoPlay
        muted
        loop
        style={{
          minWidth: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
        }}
      >
        <source
          src="/NFT_4_Lift_-_Clara_Luzian_unqqzt.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
      <Dialog onClose={() => setIsLoginOpen(false)} open={isLoginOpen}>
        <DialogTitle>Login</DialogTitle>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDirection="column"
          ml={8}
          mr={8}
          height="250px"
        >
          <TextField label="Username" variant="outlined" />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            error={isError}
            helperText={isError ? "Username or Password is invalid" : ""}
          />
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={() => setIsError(true)}
          >
            Log in
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

export default App;
