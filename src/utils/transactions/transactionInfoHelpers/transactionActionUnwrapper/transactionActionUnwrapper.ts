import {
  TransactionActionType,
  UnwrapperType,
  TransactionActionCategoryEnum
} from 'types/serverTransactions.types';
import { dcdtNftUnwrapper } from './helpers/dcdtNftUnwrapper';
import { mexUnwrapper } from './helpers/mexUnwrapper';
import { stakeUnwrapper } from './helpers/stakeUnwrapper';

export const transactionActionUnwrapper = (
  action: TransactionActionType
): Array<string | UnwrapperType> => {
  if (!action.arguments) {
    return action.description ? [action.description] : [action.name];
  }

  switch (action.category) {
    case TransactionActionCategoryEnum.dcdtNft:
      return dcdtNftUnwrapper(action);
    case TransactionActionCategoryEnum.mex:
      return mexUnwrapper(action);
    case TransactionActionCategoryEnum.stake:
      return stakeUnwrapper(action);
    default:
      return action.description ? [action.description] : [];
  }
};
