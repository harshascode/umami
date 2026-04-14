import {
  Button,
  Column,
  type ColumnProps,
  Heading,
  Icon,
  Row,
  Tooltip,
  TooltipTrigger,
} from '@umami/react-zen';
import { useState } from 'react';
import { useMessages } from '@/components/hooks';
import { Maximize, X } from '@/components/icons';

export interface PanelProps extends ColumnProps {
  title?: string;
  allowFullscreen?: boolean;
}

const fullscreenStyles = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  border: 'none',
  zIndex: 9999,
} as any;

export function Panel({ title, allowFullscreen, style, children, ...props }: PanelProps) {
  const { formatMessage, labels } = useMessages();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Column
      paddingY={{ xs: '6', md: '8' }}
      paddingX={{ xs: '4', md: '8' }}
      border
      borderRadius="2"
      backgroundColor
      position="relative"
      gap="4"
      {...props}
      style={{
        ...style,
        ...(isFullscreen ? fullscreenStyles : {}),
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      {title && (
        <Row justifyContent="space-between" alignItems="center" marginBottom="2">
          <Heading size="2">{title}</Heading>
          {allowFullscreen && (
            <TooltipTrigger delay={0} isDisabled={isFullscreen}>
              <Button size="sm" variant="quiet" onPress={handleFullscreen}>
                <Icon>{isFullscreen ? <X /> : <Maximize />}</Icon>
              </Button>
              <Tooltip>{formatMessage(labels.maximize)}</Tooltip>
            </TooltipTrigger>
          )}
        </Row>
      )}
      {!title && allowFullscreen && (
        <Row justifyContent="flex-end" alignItems="center">
          <TooltipTrigger delay={0} isDisabled={isFullscreen}>
            <Button size="sm" variant="quiet" onPress={handleFullscreen}>
              <Icon>{isFullscreen ? <X /> : <Maximize />}</Icon>
            </Button>
            <Tooltip>{formatMessage(labels.maximize)}</Tooltip>
          </TooltipTrigger>
        </Row>
      )}
      {children}
    </Column>
  );
}
