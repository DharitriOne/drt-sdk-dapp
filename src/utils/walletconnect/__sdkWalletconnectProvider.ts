import {
  SessionEventTypes,
  PairingTypes,
  EngineTypes
} from '@dharitri-sdk/wallet-connect-provider';
import {
  Operation as WalletConnectMethodsEnum,
  OptionalOperation as WalletConnectOptionalMethodsEnum
} from '@dharitri-sdk/wallet-connect-provider/out/operation';
import { WalletConnectV2Provider } from '@dharitri-sdk/wallet-connect-provider/out/walletConnectV2Provider';

/**
 * These members are ingnored when compiling to commonJS
 */
export {
  EngineTypes,
  PairingTypes,
  SessionEventTypes,
  WalletConnectMethodsEnum,
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
};
