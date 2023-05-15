import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, Title, Text, Image } from '@mantine/core';
import avatar from '../../assets/images/avatar.svg'
const useStyles = createStyles((theme) => ({
    'nav-header': {
        height: "80px",
        borderBottom: `1px solid ${theme.white}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    'header-title': {
        color: theme.white,
        border: `2px solid ${theme.white}`,
        padding: "0.5rem",
        borderRadius: "50%"
    },
    link: {
        width: rem(50),
        height: rem(50),
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
        opacity: 0.85,

        // '&:hover': {
        //     opacity: 1,
        //     backgroundColor: theme.fn.lighten(
        //         theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        //         0.1
        //     ),
        // },
    },

    active: {
        opacity: 1,
        // '&, &:hover': {
        //     backgroundColor: theme.fn.lighten(
        //         theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        //         0.15
        //     ),
        // },
    },
    'icon-style': {
        fontSize: "1.5rem"
    },
    'nav-1': {
        borderBottom: `1px solid ${theme.white}`
    }
}));

interface NavbarLinkProps {
    icon: string;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Text className={cx(Icon, classes['icon-style'])}></Text>
            </UnstyledButton>
        </Tooltip>
    );
}

const nav1 = [
    { icon: 'icon-home', label: 'Home' },
    { icon: 'icon-clock', label: 'Duration' },


];

const nav2 = [
    { icon: 'icon-users', label: 'Teams' },
    { icon: 'icon-portfolio', label: 'Tasks' },
]

const nav3 = [
    { icon: 'icon-plus', label: 'Add' },
    { icon: 'icon-help', label: 'Help' },
]

function Sidebar() {
    const [active, setActive] = useState(0);
    const { classes } = useStyles()

    const navLinks1 = nav1.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));
    const navLinks2 = nav2.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));
    const navLinks3 = nav3.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar
            height="100%"
            width={{ base: 80 }}
            p="md"
            sx={(theme) => ({
                backgroundColor: theme.black
            })}
        >
            <div className={classes['nav-header']}>
                <Title className={classes['header-title']} order={6}>PM</Title>
            </div>
            <Navbar.Section my={25} pb={25} className={classes['nav-1']}>
                <Stack justify="center" align="center" spacing={0}>
                    {navLinks1}
                </Stack>
            </Navbar.Section>
            <Navbar.Section grow mt={16}>
                <Stack justify="center" align="center" spacing={0}>
                    {navLinks2}
                </Stack>
            </Navbar.Section>
            <Navbar.Section mt={50}>
                <Stack justify="center" align="center" spacing={0}>
                    {navLinks3}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <Image width={32} height={32} mx="auto" mt="md" radius="50%" src={avatar} alt="Profile image" />
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}

export default Sidebar;