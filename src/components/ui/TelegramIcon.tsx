interface TelegramIconProps {
  size?: number;
}

export function TelegramIcon({ size = 18 }: TelegramIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.016 9.503c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.24 14.748 4.28 13.854c-.645-.202-.657-.645.136-.955l10.89-4.199c.537-.194 1.008.12.833.955l-.577-.407z" />
    </svg>
  );
}
