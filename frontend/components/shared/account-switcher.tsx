interface AccountSwitcherProps {
  onAccountChange?: (newAddress: any) => void;
}

export function AccountSwitcher({ onAccountChange }: AccountSwitcherProps) {
  return (
    <div data-testid="account-switcher">
      Account Switcher
    </div>
  );
}
