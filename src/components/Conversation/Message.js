import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { TextMsg, Timeline, MediaMsg, ReplyMsg } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timelines
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                 <MediaMsg el={el}/>
                case "doc":
                  // Doc msg
                  break;
                case "link":
                  // Link msg
                  break;
                case "reply":
                  return <ReplyMsg el={el} />;
                  
                default:
                  //text msg
                  return <TextMsg el={el} />;
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
