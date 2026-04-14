import { Column, Grid, Heading, Icon, Row, Text } from '@umami/react-zen';
import type { ReactNode } from 'react';
import { LinkButton } from './LinkButton';

export function PageHeader({
  title,
  description,
  label,
  icon,
  showBorder = true,
  titleHref,
  children,
}: {
  title: string;
  description?: string;
  label?: ReactNode;
  icon?: ReactNode;
  showBorder?: boolean;
  titleHref?: string;
  allowEdit?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Grid
      columns={{ xs: '1fr', md: '1fr 1fr' }}
      paddingY={{ xs: '6', md: '8' }}
      marginBottom={{ xs: '6', md: '8' }}
      border={showBorder ? 'bottom' : undefined}
      gap={{ xs: '4', md: '6' }}
    >
      <Column gap={{ xs: '2', md: '3' }}>
        {label}
        <Row alignItems="center" gap="4">
          {icon && (
            <Icon size="lg" color="muted">
              {icon}
            </Icon>
          )}
          {title && titleHref ? (
            <LinkButton href={titleHref} variant="quiet">
              <Heading size={{ xs: '2', md: '3', lg: '4' }}>{title}</Heading>
            </LinkButton>
          ) : (
            title && <Heading size={{ xs: '2', md: '3', lg: '4' }}>{title}</Heading>
          )}
        </Row>
        {description && (
          <Text color="muted" truncate style={{ maxWidth: 600 }} title={description}>
            {description}
          </Text>
        )}
      </Column>
      <Row justifyContent="flex-end" alignItems="flex-start" gap="3">
        {children}
      </Row>
    </Grid>
  );
}
