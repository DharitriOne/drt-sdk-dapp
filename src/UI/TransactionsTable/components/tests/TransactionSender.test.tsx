import React from 'react';
import { render } from '@testing-library/react';
import { TransactionSender } from '../TransactionSender';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionsSender tests', () => {
  it('should display hash', () => {
    const methods = render(
      <TransactionSender transaction={getMockTransactionByIndex(0)} />
    );

    const hash = methods.getByTestId('transactionSender');

    const resultHash =
      'moa1zwq3qaa3vk5suenlkj4cf0ullwefa6h3n2394k25pxv4sz0pwhhsla62sx';

    expect(hash.textContent).toContain(resultHash);
  });
});
