import { Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionBox = motion(Box);

export default function Main() {
  return (
    <>
      <MotionBox
        width={"100%"}
        display={"grid"}
        // grid that looks like this
        /*
            a b
            c b
        */
        gridTemplateColumns={"1fr 1fr"}
        gridTemplateRows={"1fr 1fr"}
        gridTemplateAreas={`
            "a b"
            "c b"
        `}
        gap={3}
        textAlign={"center"}
        bgcolor={"#fff"}
      >
        <MotionBox
          display={"flex"}
          flexDirection={"row-reverse"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gridArea={"a"}
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
          viewport={{ once: true }}
          bgcolor={"#f9f9f9"}
        >
          <Image
            src={"/images/chair.png"}
            alt={"chair"}
            width={278}
            height={267}
          />
          <Typography variant="h6" color={"#071b32"}>
            Chairs
          </Typography>
        </MotionBox>
        <MotionBox
          display={"flex"}
          flexDirection={"row-reverse"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gridArea={"b"}
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
          viewport={{ once: true }}
          bgcolor={"#f9f9f9"}
        >
          <Image src={"/images/lambs.png"} alt={"2"} width={481} height={677} />
          <Typography
            variant="h6"
            color={"#071b32"}
            sx={{
              transform: "translateX(50%)",
            }}
          >
            Lighting Decoration
          </Typography>
        </MotionBox>
        <MotionBox
          display={"flex"}
          flexDirection={"row-reverse"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gridArea={"c"}
          // on scroll to target element
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,

            // on scroll
          }}
          bgcolor={"#f9f9f9"}
          viewport={{ once: true }}
        >
          <Image
            src={"/images/table.png"}
            alt={"table"}
            width={276}
            height={300}
          />
          <Typography variant="h6" color={"#071b32"}>
            Tables
          </Typography>
        </MotionBox>

      </MotionBox>
      <Button
          className={"outlined"}
          sx={{
            px: 8,
            py: 1.5,
            mb: 5,
          }}
        >
          More Categories
        </Button>
    </>
  );
}
