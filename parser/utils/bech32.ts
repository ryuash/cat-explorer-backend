import { bech32 } from 'bech32';

/**
 * Util that converts a hex in to bech32
 * @param address address
 * @param prefix chain address prefix
 * @returns bech32
 */
export const hexToBech32 = (address: string, prefix: string): string => {
  try {
    const addressBuffer = Buffer.from(address, 'hex');
    return bech32.encode(prefix, bech32.toWords(addressBuffer));
  } catch {
    return address;
  }
};
