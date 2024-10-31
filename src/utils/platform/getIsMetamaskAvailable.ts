import { MetamaskProvider } from '@dharitri-sdk/metamask-provider/out/metamaskProvider';

export const getIsMetamaskAvailable = () => {
  return MetamaskProvider.isMetamaskInstalled();
};
