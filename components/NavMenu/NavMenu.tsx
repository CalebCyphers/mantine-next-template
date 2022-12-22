import { Navbar } from '@mantine/core';

export default function NavMenu() {
    return (
        <Navbar width={{ sm: 250, lg: 400, base: 100 }} hidden hiddenBreakpoint="xs">
            <Navbar.Section>Logo section</Navbar.Section>
            <Navbar.Section grow>List section</Navbar.Section>
        </Navbar>
    );
}
