import { Group, Stack, Text, Title, createStyles } from "@mantine/core"

const useStyle = createStyles((theme) => ({
    'main-wrapper': {
        height: "100%"
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
function Health() {
    const { classes } = useStyle()
    return (
        <>
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
        </>
    )
}

export default Health
