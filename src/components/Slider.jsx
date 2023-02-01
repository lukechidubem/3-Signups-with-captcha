import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Stack } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis excepturi quisquam eaque maiores sed ad,
    repudiandae cum nemo eum, repellat aliquid non quod quam qui
    eos facere harum earum, enim illum minus deleniti dolor.
    Dolores voluptas laborum odit, voluptatibus distinctio dicta
    consectetur accusantium, cumque labore, totam aliquid
    veritatis at officiis.`,
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis  voluptatibus distinctio dicta
    consectetur accusantium, cumque labore, totam aliquid
    veritatis at officiis.`,
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   eaque maiores sed ad,
    repudiandae cum nemo eum, repellat aliquid non quod quam qui
    eos facere harum earum, enim illum minus deleniti dolor.
    Dolores voluptas laborum odit, voluptatibus distinctio dicta
    consectetur accusantium, cumque labore, totam aliquid
    veritatis at officiis.`,
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis excepturi quisquam eaque maiores sed ad,
    repudiandae cum nemo eum, repellat aliquid non quod quam qui
    eos facere  dicta
    consectetur accusantium, cumque labore, totam aliquid
    veritatis at officiis.`,
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        marginBottom: "50px",
        backgroundColor: "blue",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Stack
                direction={{ sm: "row", xs: "column" }}
                spacing={{ sm: 3, xs: 0 }}
                alignItems="center"
                justifyContent="center"
                // sx={{ backgroundColor: "blue" }}
              >
                <Box
                  p={2}
                  component="img"
                  sx={{
                    height: 250,
                    display: "block",
                    maxWidth: 250,
                    overflow: "hidden",
                    width: "100%",
                    margin: "30px 50px",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />

                <Box p={2} sx={{ marginBottom: "20px" }}>
                  {" "}
                  <Typography
                    sx={{
                      color: "white",
                      maxWidth: 700,
                      width: "100%",

                      //   maxHeight: 250,
                    }}
                  >
                    {step.label}
                  </Typography>
                </Box>
              </Stack>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ backgroundColor: "transparent", color: "white" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Slider;
