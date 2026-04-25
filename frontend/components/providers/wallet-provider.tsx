import { createContext, useContext, ReactNode, useState } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address?: string;
  network?: string;
  stubSpendableBalance?: number;
  isTransactionPending: boolean;
  setTransactionPending: (pending: boolean) => void;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
  defaultNetwork?: string;
}

export function WalletProvider({ children, defaultNetwork }: WalletProviderProps) {
  const [isTransactionPending, setTransactionPending] = useState(false);
  
  const value: WalletContextType = {
    isConnected: false,
    network: defaultNetwork || 'testnet',
    stubSpendableBalance: 1000,
    isTransactionPending,
    setTransactionPending,
    connect: async () => {},
    disconnect: () => {},
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
}
