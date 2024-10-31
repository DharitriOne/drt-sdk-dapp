import { TransactionActionsEnum } from 'types/serverTransactions.types';
import { transactionActionUnwrapper } from '../transactionActionUnwrapper';

// file.only
describe('Tx Description unwrapper tests', () => {
  test('Token Transfer', () => {
    const { action } = {
      action: {
        category: 'dcdtNft',
        name: TransactionActionsEnum.transfer,
        description:
          'Transfer 2950.00 USDC-c76f1f to moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu',
        arguments: {
          transfers: [
            {
              collection: 'USDC-c76f1f',
              identifier: 'USDC-c76f1f',
              ticker: 'USDC',
              name: 'WrappedUSDC',
              value: '2950000000'
            }
          ],
          receiver:
            'moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu'
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Transfer',
      { token: action.arguments.transfers },
      'to',
      { address: action.arguments.receiver }
    ]);
  });
  test('NFT Transfer', () => {
    const { action } = {
      action: {
        category: 'dcdtNft',
        name: TransactionActionsEnum.transfer,
        description:
          'Transfer NFT ARTCRAFT-322c6e-11 to moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu',
        arguments: {
          transfers: [
            {
              type: 'NonFungibleDCDT',
              collection: 'ARTCRAFT-322c6e',
              identifier: 'ARTCRAFT-322c6e-11',
              ticker: 'ARTCRAFT-322c6e',
              name: 'Hope',
              value: '1'
            }
          ],
          receiver:
            'moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu'
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Transfer',
      { token: action.arguments.transfers },
      'to',
      { address: action.arguments.receiver }
    ]);
  });
  test('MetaDCDT Transfer', () => {
    const { action } = {
      action: {
        category: 'dcdtNft',
        name: TransactionActionsEnum.transfer,
        description:
          'Transfer 1.537276176898979513 LKFARM (LKFARM-9d1ea8-126c17) to moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu',
        arguments: {
          transfers: [
            {
              type: 'MetaDCDT',
              collection: 'LKFARM-9d1ea8',
              identifier: 'LKFARM-9d1ea8-126c17',
              ticker: 'LKFARM',
              name: 'LockedLPStaked',
              value: '1537276176898979513',
              decimals: 18
            }
          ],
          receiver:
            'moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu'
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Transfer',
      { token: action.arguments.transfers },
      'to',
      { address: action.arguments.receiver }
    ]);
  });

  test('stake', () => {
    const { action } = {
      action: {
        category: 'stake',
        name: TransactionActionsEnum.delegate,
        description:
          'Delegate 14.167802221131358682 REWA to staking provider ARC Stake',
        arguments: { value: '14167802221131358682', providerName: 'ARC Stake' }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Delegate',
      { rewaValue: action.arguments?.value },
      'to staking provider',
      { providerName: action.arguments?.providerName }
    ]);
  });

  test('stake unDelegate', () => {
    const { action } = {
      action: {
        category: 'stake',
        name: TransactionActionsEnum.unDelegate,
        description: 'Undelegate 5 rEWA from staking provider ARC Stake',
        arguments: { value: '5000000000000000000', providerName: 'ARC Stake' }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Undelegate',
      { rewaValue: action.arguments?.value },
      'from staking provider',
      { providerName: action.arguments?.providerName }
    ]);
  });

  test('stake claimRewards', () => {
    const { action } = {
      action: {
        category: 'stake',
        name: TransactionActionsEnum.claimRewards,
        description: 'Claim rewards from staking provider ARC Stake',
        arguments: { providerName: 'ARC Stake' }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Claim rewards from staking provider',
      { providerName: action.arguments?.providerName }
    ]);
  });

  test('stake reDelegateRewards', () => {
    const { action } = {
      action: {
        category: 'stake',
        name: TransactionActionsEnum.reDelegateRewards,
        description: 'Redelegate rewards from staking provider ARC Stake',
        arguments: { providerName: 'ARC Stake' }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Redelegate rewards from staking provider',
      { providerName: action.arguments?.providerName }
    ]);
  });

  test('stake withdraw', () => {
    const { action } = {
      action: {
        category: 'stake',
        name: TransactionActionsEnum.withdraw,
        description: 'Withdraw from staking provider ARC Stake',
        arguments: { providerName: 'ARC Stake' }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Withdraw from staking provider',
      { providerName: action.arguments?.providerName }
    ]);
  });

  // //TODO claimlockedassets
  test('Enter farm', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.enterFarm,
        description: 'Enter farm with 20 LKMEX',
        arguments: {
          transfers: [
            {
              type: 'MetaDCDT',
              name: 'LockedMEX',
              collection: 'LKMEX-aab910',
              identifier: 'LKMEX-aab910-04',
              ticker: 'LKMEX',
              decimals: 18,
              value: '20000000000000000000'
            }
          ]
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Enter farm with',
      { token: action.arguments.transfers }
    ]);
  });
  test('Enter farm and lock rewards', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.enterFarmAndLockRewards,
        description:
          'Enter farm and lock rewards with 61.229451140721546841 REWAMEX',
        arguments: {
          transfers: [
            {
              name: 'REWAMEXLP',
              collection: 'REWAMEX-0be9e5',
              identifier: 'REWAMEX-0be9e5',
              ticker: 'REWAMEX',
              value: '61229451140721546841'
            }
          ]
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Enter farm and lock rewards with',
      { token: action.arguments.transfers }
    ]);
  });
  test('Exit farm', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.exitFarm,
        description: 'Exit farm with 1358392.837361997848576 LKFARM',
        arguments: {
          transfers: [
            {
              type: 'MetaDCDT',
              name: 'LockedLPStaked',
              collection: 'LKFARM-9d1ea8',
              identifier: 'LKFARM-9d1ea8-7ff1',
              ticker: 'LKFARM',
              decimals: 18,
              value: '1358392837361997848576000'
            }
          ]
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Exit farm with',
      { token: action.arguments.transfers }
    ]);
  });
  test('Claim rewards', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.claimRewards,
        description: 'Claim rewards 8.113902227485916134 LKFARM',
        arguments: {
          transfers: [
            {
              type: 'MetaDCDT',
              name: 'LockedLPStaked',
              collection: 'LKFARM-9d1ea8',
              identifier: 'LKFARM-9d1ea8-016711',
              ticker: 'LKFARM',
              decimals: 18,
              value: '8113902227485916134'
            }
          ]
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Claim rewards',
      { token: action.arguments.transfers }
    ]);
  });
  test('Compound rewards', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.compoundRewards,
        description: 'Reinvest rewards 20 LKFARM',
        arguments: {
          transfers: [
            {
              type: 'MetaDCDT',
              name: 'LockedLPStaked',
              collection: 'LKFARM-9d1ea8',
              identifier: 'LKFARM-9d1ea8-01ee91',
              ticker: 'LKFARM',
              decimals: 18,
              value: '20000000000000000000'
            }
          ]
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Reinvest rewards',
      { token: action.arguments.transfers }
    ]);
  });
  test('Swap tokens', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.swap,
        description:
          'Swap 1 WREWA for a minimum of 281066.754391919467235791 MEX',
        arguments: {
          token1: {
            name: 'WrappedREWA',
            collection: 'WREWA-bd4d79',
            identifier: 'WREWA-bd4d79',
            ticker: 'WREWA',
            value: '1000000000000000000'
          },
          token2: {
            name: 'MEX',
            collection: 'MEX-455c57',
            identifier: 'MEX-455c57',
            ticker: 'MEX',
            value: '281066754391919467235791'
          }
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([action.description]);
  });
  test('Add liquidity', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.addLiquidity,
        description:
          'Added liquidity for 0.309893556225986569 WREWA and 88246.97734239037166522 MEX',
        arguments: {
          transfers: [
            {
              name: 'WrappedREWA',
              collection: 'WREWA-bd4d79',
              identifier: 'WREWA-bd4d79',
              ticker: 'WREWA',
              value: '309893556225986569'
            },
            {
              name: 'MEX',
              collection: 'MEX-455c57',
              identifier: 'MEX-455c57',
              ticker: 'MEX',
              value: '88246977342390371665220'
            }
          ]
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Added liquidity for',
      { token: [action.arguments.transfers[0]] },
      'and',
      { token: [action.arguments.transfers[1]] }
    ]);
  });
  test('Remove liquidity', () => {
    const { action } = {
      action: {
        category: 'mex',
        name: TransactionActionsEnum.removeLiquidity,
        description: 'Removed liquidity 0.297 REWAMEX',
        arguments: {
          transfers: {
            name: 'REWAMEXLP',
            collection: 'REWAMEX-0be9e5',
            identifier: 'REWAMEX-0be9e5',
            ticker: 'REWAMEX',
            value: '297000000000000000'
          }
        }
      }
    };
    expect(transactionActionUnwrapper(action)).toEqual([
      'Removed liquidity with ',
      { token: action.arguments.transfers }
    ]);
  });
});
