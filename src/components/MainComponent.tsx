import { Grid, createStyles } from "@mantine/core";
import Health from "./Health";
import Tasks from "./charts/Tasks";
import Cost from "./charts/Cost";
import Progress from "./charts/Progress";

const useStyle = createStyles((theme) => ({
    'main-wrapper': {
        height: "100%"
    },
    'grid-section': {
        border: `1px solid ${theme.white}`
    },
    'healthStatus': {
        borderBottom: `1px solid ${theme.colors.gray[7]}`,

        '&:last-child': {
            border: "none"
        }
    },
    'title': {
        color: theme.white
    },
    'description': {
        color: theme.colors.gray[5]
    }
}))

function MainComponent() {

    const { classes } = useStyle()
    return (
        <div className={classes["main-wrapper"]}>
            <Grid grow gutter="xs" h={"100%"}>
                <Grid.Col className={classes["grid-section"]} h={"50%"} p={"xl"} span={4}>
                    <Health />
                </Grid.Col>
                <Grid.Col className={classes["grid-section"]} h={"50%"} p={"xl"} span={4}>
                    <Tasks />
                </Grid.Col>
                <Grid.Col className={classes["grid-section"]} h={"50%"} p={"xl"} span={4}>
                    <Progress />
                </Grid.Col>
                <Grid.Col className={classes["grid-section"]} h={"50%"} p={"xl"} span={4}>4</Grid.Col>
                <Grid.Col className={classes["grid-section"]} h={"50%"} p={"xl"} span={4}>
                    <Cost />
                </Grid.Col>
                <Grid.Col className={classes["grid-section"]} h={"50%"} p={"xl"} span={4}>6</Grid.Col>
            </Grid>
        </div>
    )
}

export default MainComponent;
