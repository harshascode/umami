import { Heading, Icon, Row, type RowProps, Text } from '@umami/react-zen';
import type { ReactNode } from 'react';

export function SectionHeader({
  title,
  description,
  icon,
  children,
  ...props
}: {
  title?: string;
  description?: string;
  icon?: ReactNode;
  allowEdit?: boolean;
  className?: string;
  children?: ReactNode;
} & RowProps) {
  return (
    <Row
      {...props}
      justifyContent="space-between"
      alignItems="center"
      paddingY="4"
      borderBottom="1px solid var(--base-color-4)"
    >
      <Row gap="4" alignItems="center">
        {icon && <Icon size="lg">{icon}</Icon>}
        <Row gap="3" alignItems="baseline" flexDirection="column">
          {title && (
            <Heading size="3" style={{ fontSize: '16px', fontWeight: 600 }}>
              {title}
            </Heading>
          )}
          {description && (
            <Text size="sm" color="muted">
              {description}
            </Text>
          )}
        </Row>
      </Row>
      <Row justifyContent="flex-end" gap="2">
        {children}
      </Row>
    </Row>
  );
}
