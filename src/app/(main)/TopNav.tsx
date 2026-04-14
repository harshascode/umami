import { Row, ThemeButton } from '@umami/react-zen';
import { LanguageButton } from '@/components/input/LanguageButton';
import { ProfileButton } from '@/components/input/ProfileButton';

export function TopNav() {
  return (
    <Row
      position="sticky"
      top="0"
      alignItems="center"
      justifyContent="flex-end"
      paddingY={{ xs: '3', md: '4' }}
      paddingX={{ xs: '4', md: '8' }}
      width="100%"
      backgroundColor="2"
      borderBottom="1px solid var(--base-color-4)"
      zIndex={100}
      gap="2"
    >
      <ThemeButton />
      <LanguageButton />
      <ProfileButton />
    </Row>
  );
}
