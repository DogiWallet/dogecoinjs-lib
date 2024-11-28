// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}


export const dogecoin: Network = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: 'doge',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};


export const dogecoinTestnet: Network = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: 'tdoge',
  bip32: {
    public: 0x043587cf, // 0x02facafd, TODO: check this
    private: 0x04358394, // 0x02fac398, TODO: check this
  },
  pubKeyHash: 0x71, // 0x1e, TODO: check this
  scriptHash: 0xc4, // 0x16, TODO: check this 
  wif: 0xef, // 0x9e, TODO: check this
};

