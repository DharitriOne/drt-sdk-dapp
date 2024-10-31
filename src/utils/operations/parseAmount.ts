import { TokenPayment } from '@dharitri-sdk/core';
import { DECIMALS } from 'constants/index';

export function parseAmount(amount: string, numDecimals: number = DECIMALS) {
  return TokenPayment.fungibleFromAmount('', amount, numDecimals).toString();
}
