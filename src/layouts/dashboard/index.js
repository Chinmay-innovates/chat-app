import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, Stack, IconButton, Switch } from "@mui/material";
import { Gear } from "phosphor-react";
import { styled, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { Nav_Buttons } from "../../data";
import { useState } from "react";
import Logo from "../../assets/Images/logo.ico";
import useSettings from "../../hooks/useSettings";

const ImageSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 26,
  padding:2,
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(33px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 26,
    height: 26,
    borderRadius:13,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      duration:200,
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 25 / 2,
  },
}));

// const AntSwitch = styled(Switch)(({ theme }) => ({
//   width: 40,
//   height: 20,
//   padding: 0,
//   display: "flex",
//   "&:active": {
//     "& .MuiSwitch-thumb": {
//       width: 20,
//       height: 20,
//     },
//     "& .MuiSwitch-switchBase.Mui-checked": {
//       transform: "translateX(0px)",
//     },
//   },
//   "& .MuiSwitch-switchBase": {
//     "&.Mui-checked": {
//       transform: "translateX(20px)",
//       color: "#fff",
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxShadow: "0 2px 2px 0 rgb(0 35 11 / 20%)",
//     width: 20,
//     height: 20,
//     duration: 200,
//     borderRadius: 10,
//     position: "absolute",
//     top: "0",
//     left: "0",
//     transition: theme.transitions.create(["width"], {
//     }),
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 15,
//     opacity: 1,
//     backgroundColor:
//       theme.palette.mode === "dark"
//         ? "rgba(255,255,255,.35)"
//         : "rgba(0,0,0,.25)",
//     boxSizing: "border-box",
//   },
// }));

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setselected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <Stack direction={"row"} position={"absolute"} left="0px" bottom={"0"}>
      <Box
        p={4} //padding : 2*8 = 16px
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.250)",
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={4}
        >
          <Stack alignItems={"center"} spacing={3}>
            <Box 
              sx={{
                backgroundColor: theme.palette.primary.main,
                height:64,
                width:64,
                borderRadius: 1.5, //ACTUAL borderRadius:12px
                /* 1.5*8 = 12px  ,8 is default in material UI*/
              }}
            >
              <img src={Logo} alt={"Chat app"} />
            </Box>
            <Stack
              spacing={3}
              sx={{ width: "max-content" }}
              direction={"column"}
              alignItems={"center"}
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setselected(el.index);
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setselected(3);
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={3}>
            {/* Switch */}
            <ImageSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
