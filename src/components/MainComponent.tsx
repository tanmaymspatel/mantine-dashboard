import { Grid, Group, Stack, Text, Title, createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
    'main-wrapper': {
        height: "100%"
    },
    'grid-section': {

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
                <Grid.Col h={"50%"} p={"xl"} span={4}>
                    <Title fw={400} className={classes.title} order={4}>Health</Title>
                    <Stack pt={"md"}>
                        <Group pb={"sm"} className={classes.healthStatus}>
                            <Title fw={400} className={classes.title} order={6}>Time</Title>
                            <Text className={classes.description}>14% ahead of schedule.</Text>
                        </Group>
                        <Group pb={"sm"} className={classes.healthStatus}>
                            <Title fw={400} className={classes.title} order={6}>Tasks</Title>
                            <Text className={classes.description}>12 tasks are to be completed.</Text>
                        </Group>
                        <Group pb={"sm"} className={classes.healthStatus}>
                            <Title fw={400} className={classes.title} order={6}>Workload</Title>
                            <Text className={classes.description}>0 task overdue.</Text>
                        </Group>
                        <Group pb={"sm"} className={classes.healthStatus}>
                            <Title fw={400} className={classes.title} order={6}>Progress</Title>
                            <Text className={classes.description}>14% completed.</Text>
                        </Group>
                        <Group pb={"sm"} className={classes.healthStatus}>
                            <Title fw={400} className={classes.title} order={6}>Cost</Title>
                            <Text className={classes.description}>42% under budget</Text>
                        </Group>
                    </Stack>
                </Grid.Col>
                <Grid.Col h={"50%"} p={"xl"} span={4}>2</Grid.Col>
                <Grid.Col h={"50%"} p={"xl"} span={4}>3</Grid.Col>
                <Grid.Col h={"50%"} p={"xl"} span={4}>4</Grid.Col>
                <Grid.Col h={"50%"} p={"xl"} span={4}>5</Grid.Col>
                <Grid.Col h={"50%"} p={"xl"} span={4}>6</Grid.Col>
            </Grid>
        </div>
    )
}

export default MainComponent;
