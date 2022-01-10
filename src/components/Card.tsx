import {
  Box,
  Card as MUICard,
  CardContent,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC, useState } from "react";

const styles = makeStyles({
  rootSelected: {
    borderLeft: "4px solid #33bdff",
    margin: "15px",
    transition: "all 0.1s linear 0s",
  },
  rootNotSelected: {
    borderLeft: "4px solid #efefef",
    margin: "10px",
    transition: "all 0.1s linear 0s",
  },
  icno: {
    padding: "5px",
  },
  chip: {
    backgroundColor: "#fff3bf",
    color: "#ffc861",
    fontSize: "16px",
    height: "fit-content",
    borderRadius: "10px",
    padding: "0px 5px",
  },
  button: {
    borderRadius: "16px",
    height: "35px",
  },
});

const Card: FC = () => {
  const classes = styles();
  const [selected, setSelected] = useState<boolean>(false);
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));

  const toggleSelection = () => setSelected(!selected);

  return (
    <MUICard
      onClick={toggleSelection}
      className={selected ? classes.rootSelected : classes.rootNotSelected}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>Meeting Title</strong>
            </Typography>
            <Box display="flex" alignItems="flex-start">
              <img className={classes.icno} src="/assets/3.png" alt="time" />
              <Typography>Monday Fb 16, 11:00 AM - 2:00 Pm (2hr)</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <img className={classes.icno} src="/assets/1.png" alt="time" />
              <Typography>Project</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <img
                style={{ padding: "0px 7px" }}
                className={classes.icno}
                src="/assets/2.png"
                alt="time"
              />
              <Typography>Location</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent="space-between"
            flexDirection="column"
            alignItems="flex-end"
          >
            <Grid item className={classes.chip}>
              Schedules
            </Grid>
            <Grid
              item
              container
              justifyContent={matchSM ? "flex-end" : "center"}
              alignItems="center"
            >
              <Button
                className={classes.button}
                variant="outlined"
                sx={{
                  border: "1px solid #ced4da",
                  color: "black",
                  margin: "0px 2px",
                }}
                startIcon={
                  <img
                    className={classes.icno}
                    src="/assets/4.png"
                    alt="time"
                  />
                }
              >
                <strong>Join Call</strong>
              </Button>
              <Stack direction="row">
                <Avatar sx={{ margin: "2px", height: "24px", width: "24px" }}>
                  <Typography fontSize={14}>H</Typography>
                </Avatar>
                <Avatar sx={{ margin: "2px", height: "24px", width: "24px" }}>
                  <Typography fontSize={14}>H</Typography>
                </Avatar>
                <Avatar sx={{ margin: "2px", height: "24px", width: "24px" }}>
                  <Typography fontSize={14}>+4</Typography>
                </Avatar>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </MUICard>
  );
};

export default Card;
