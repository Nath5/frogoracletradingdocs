import React, { CSSProperties, ReactNode } from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.
import Link from '@docusaurus/Link';


function getStrategyLink(className: string): string {
  const strategyLinks: { [key: string]: string } = {
    'ts-sbr': '/strategies/sr_strategies#support-becomes-resistance-sbr',
    'ts-gr': '/strategies/sr_strategies#gap-rejection-gr',
    'ts-gcr': '/strategies/sr_strategies#gap-close-reversal-gcr',
    'ts-dpocb': '/strategies/sr_strategies#dpoc-bounces-dpocb',
    'ts-fs': '/strategies/sr_strategies#final-stand-fs',
    'ts-bap': '/strategies/sr_strategies#bounce-and-pop-bap',
    'ts-fb': '/strategies/sr_strategies#failed-breakdown-breakout-fb',
    'ts-gz': '/strategies/fib_strategies#golden-zone-reversal-gz',
    'ts-272': '/strategies/fib_strategies#272-extension-reversal-272'
  };

  return strategyLinks[className] || '';
}

function getStrategyName(className: string): string {
  const strategyNames: { [key: string]: string } = {
    'ts-sbr': 'Support Becomes Resistance',
    'ts-gr': 'Gap Rejection',
    'ts-gcr': 'Gap Close Reversal',
    'ts-dpocb': 'DPOC Bounces',
    'ts-fs': 'Final Stand',
    'ts-bap': 'Bounce And Pop',
    'ts-fb': 'Failed Breakdown/Breakout',
    'ts-gz': 'Fib Golden Zone',
    'ts-272': '272 Extension Reversal',
    'ts-vas': 'Volume Accumulation Setup',
    'ts-vt': 'Volume Trend Setup'
  };

  return strategyNames[className] || 'Unknown Strategy';
}

// Define an interface for the component props
interface TagProps {
  className?: string; // Custom classes for the container card
  style?: CSSProperties; // Custom styles for the container card
  shadow?: 'lw' | 'md' | 'tl'; // Used to add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl),
}
// Build the card component with the specified props
const Tag: React.FC<TagProps> = ({
  className,
  style,
  shadow
}) => {
  
  const tagShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    <Link to={getStrategyLink(className)} style={{textDecoration: "none"}}>
     <span className={clsx('badge badge-primary', className, tagShadow)} style={style}>{getStrategyName(className)}</span>
    </Link>
  );
};
export default Tag;