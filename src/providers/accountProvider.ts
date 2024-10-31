import { ExtensionProvider } from '@dharitri-sdk/extension-provider';
import { HWProvider } from '@dharitri-sdk/hw-provider';
import { MetamaskProvider } from '@dharitri-sdk/metamask-provider/out/metamaskProvider';
import { OperaProvider } from '@dharitri-sdk/opera-provider';
import { PasskeyProvider } from '@dharitri-sdk/passkey-provider/out';
import { IframeProvider } from '@dharitri-sdk/web-wallet-iframe-provider/out';
import { WalletProvider } from '@dharitri-sdk/web-wallet-provider';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { IDappProvider } from 'types';
import { WalletConnectV2Provider } from 'utils/walletconnect/__sdkWalletconnectProvider';
import { emptyProvider } from './utils';

export type ProvidersType =
  | IDappProvider
  | ExtensionProvider
  | PasskeyProvider
  | MetamaskProvider
  | WalletProvider
  | CrossWindowProvider
  | IframeProvider
  | HWProvider
  | OperaProvider
  | WalletConnectV2Provider;

let accountProvider: ProvidersType = emptyProvider;

let externalProvider: IDappProvider | null = null;

export function setAccountProvider<TProvider extends ProvidersType>(
  provider: TProvider
) {
  accountProvider = provider;
}

export function setExternalProvider(provider: IDappProvider) {
  externalProvider = provider;
}

export function setExternalProviderAsAccountProvider() {
  if (externalProvider != null) {
    accountProvider = externalProvider;
  }
}

export function getAccountProvider(): IDappProvider {
  return (accountProvider as IDappProvider) || emptyProvider;
}

export function getExternalProvider() {
  return externalProvider;
}
