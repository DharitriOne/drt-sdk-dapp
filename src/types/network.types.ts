export interface BaseNetworkType {
  id: string;
  chainId: string;
  name: string;
  rewaLabel: string;
  decimals: string;
  digits: string;
  gasPerDataByte: string;
  walletConnectDeepLink: string;
  walletAddress: string;
  apiAddress: string;
  explorerAddress: string;
  apiTimeout: string;
  walletConnectV2ProjectId?: string;
  walletConnectV2Options?: Record<string, any>;
  xAliasAddress?: string;
  roundDuration: number;
  metamaskSnapWalletAddress?: string;
}

export interface AccountInfoSliceNetworkType extends BaseNetworkType {
  walletConnectBridgeAddress: string;
  walletConnectV2RelayAddress: string;
  customWalletAddress?: string;
}

export interface NetworkType extends BaseNetworkType {
  walletConnectBridgeAddresses: string[];
  walletConnectV2RelayAddresses: string[];
}

export interface CustomNetworkType {
  id?: string;
  chainId?: string;
  name?: string;
  rewaLabel?: string;
  decimals?: string;
  digits?: string;
  gasPerDataByte?: string;
  walletConnectDeepLink?: string;
  walletConnectBridgeAddresses?: string[];
  walletAddress?: string;
  apiAddress?: string;
  explorerAddress?: string;
  skipFetchFromServer?: boolean;
  apiTimeout?: string | number;
  walletConnectV2ProjectId?: string;
  walletConnectV2Options?: any;
  metamaskSnapWalletAddress?: string;
}

export interface ApiNetworkConfigType {
  moa_chain_id: string;
  moa_denomination: number;
  moa_gas_per_data_byte: number;
  moa_gas_price_modifier: string;
  moa_latest_tag_software_version: string;
  moa_max_gas_per_transaction: number;
  moa_meta_consensus_group_size: number;
  moa_min_gas_limit: number;
  moa_min_gas_price: number;
  moa_min_transaction_version: number;
  moa_num_metachain_nodes: number;
  moa_num_nodes_in_shard: number;
  moa_num_shards_without_meta: number;
  moa_rewards_top_up_gradient_point: string;
  moa_round_duration: number;
  moa_rounds_per_epoch: number;
  moa_shard_consensus_group_size: number;
  moa_start_time: number;
  moa_top_up_factor: string;
}
