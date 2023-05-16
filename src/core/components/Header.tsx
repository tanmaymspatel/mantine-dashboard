import { Avatar, Group, Header, Navbar, Title, createStyles } from '@mantine/core';
import { NavLink } from 'react-router-dom'
import headerAvatar from "../../assets/images/avatar.svg"

const useStyele = createStyles((theme) => ({
    'header': {
        height: "100%"
    },
    'avatar': {
        borderColor: theme.black
    },
    placeholder: {
        backgroundColor: "#48799c",
        color: theme.black
    },
    'headerLinksContainer': {
        display: "flex",
        color: theme.white,
        height: "100%"
    },
    'navLink': {
        listStyle: "none",
        padding: "0 1rem",
        color: theme.white,
        textDecoration: "none",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    'activeNavLink': {
        border: '2px solid #b1d958'
    },
    'icon': {
        fontSize: "1.25 rem"
    }
    // placeholderIcon
}))
function HeaderDashboard() {

    const { classes, cx } = useStyele()

    return (
        <Header
            height="60px"
            sx={(theme) => ({
                borderBottomColor: theme.colors.gray[7],
                backgroundColor: theme.colors.darkBlue
            })}
        >
            <Group px={"xl"} className={classes.header}>
                <Group>
                    <Title order={4} fw={400} color='white'>Govalle Construction</Title>
                    <Avatar.Group spacing="12px">
                        <Avatar className={classes.avatar} size={"30px"} src={headerAvatar} radius={"xl"} />
                        <Avatar className={classes.avatar} classNames={{ placeholder: classes.placeholder }} size={"30px"} radius={"xl"} >GP</Avatar>
                    </Avatar.Group>
                </Group>
                <ul className={classes.headerLinksContainer}>
                    <NavLink to="" className={classes.navLink}>
                        <span className={cx(classes.icon, "icon-employee-list")}></span>
                    </NavLink>
                    <NavLink to="" className={classes.navLink}>
                        <span className={cx(classes.icon, 'icon-vertical-bars')}></span>
                    </NavLink>
                    <NavLink to="" className={classes.navLink}>
                        <span className={cx(classes.icon, 'icon-horizontal-bars')}></span>
                    </NavLink>
                    <NavLink to="" className={classes.navLink}>
                        <span className='icon-notes'></span>
                    </NavLink>
                    <NavLink to="" className={cx(classes.navLink, classes.activeNavLink)}>
                        <span className={cx(classes.icon, 'icon-line-graph')}></span>
                    </NavLink>
                    <NavLink to="" className={classes.navLink}>
                        <span className={cx(classes.icon, 'icon-bag')}></span>
                    </NavLink>
                    <NavLink to="" className={classes.navLink}>
                        <span className={cx(classes.icon, 'icon-document')}></span>
                    </NavLink>
                </ul>
            </Group>
        </Header >
    )
}

export default HeaderDashboard
