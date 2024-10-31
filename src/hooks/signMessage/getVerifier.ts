import { Address } from '@dharitri-sdk/core/out';
import { UserPublicKey, UserVerifier } from '@dharitri-sdk/wallet';

export const getVerifier = (address: string) => {
  const publicKey = new UserPublicKey(Address.fromString(address).pubkey());

  return new UserVerifier(publicKey);
};
