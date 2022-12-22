import { AppShell } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NavMenu from '../components/NavMenu/NavMenu';
import TopBar from '../components/TopBar/TopBar';

export default function HomePage() {
  return (
    <AppShell padding="sm" layout="alt" navbar={<NavMenu />} header={<TopBar></TopBar>}>
      <Welcome />
      <ColorSchemeToggle />
    </AppShell>
  );
}
