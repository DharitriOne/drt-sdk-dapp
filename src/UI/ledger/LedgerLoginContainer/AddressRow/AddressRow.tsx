import React from 'react';
import classNames from 'classnames';

import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { Trim } from 'UI/Trim';
import { getRewaLabel } from 'utils/network/getRewaLabel';

import { WithClassnameType } from '../../../types';

export interface AddressRowPropsType
  extends WithClassnameType,
    WithStylesImportType {
  selectedAddress?: string;
  index: number;
  address: string;
  balance: string;
  onSelectAddress: (address: { address: string; index: number } | null) => void;
  ledgerModalTableSelectedItemClassName?: string;
  disabled: boolean;
}

const AddressRowComponent = ({
  address,
  index,
  balance,
  selectedAddress,
  onSelectAddress,
  className = 'dapp-ledger-address-row',
  ledgerModalTableSelectedItemClassName,
  disabled = false,
  styles
}: AddressRowPropsType) => (
  <div
    onClick={() => onSelectAddress({ address, index })}
    className={classNames(
      styles?.ledgerAddressTableBodyItem,
      {
        [ledgerModalTableSelectedItemClassName ?? '']:
          selectedAddress === address,
        [styles?.ledgerAddressTableBodyItemSelected ?? '']:
          selectedAddress === address
      },
      className
    )}
  >
    <div
      className={classNames(styles?.ledgerAddressTableBodyItemData, {
        disabled
      })}
    >
      <input
        type='radio'
        id={`check_${address}`}
        disabled={disabled}
        onChange={() => onSelectAddress({ address, index })}
        data-testid={`check_${address}`}
        role='button'
        checked={selectedAddress === address}
        className={styles?.ledgerAddressTableBodyItemDataInput}
      />

      <label
        htmlFor={`check_${index}`}
        role='button'
        data-testid={`label_${index}`}
        className={styles?.ledgerAddressTableBodyItemDataLabel}
      >
        <div className={styles?.ledgerAddressTableBodyItemDataValue}>
          <Trim text={address} />
        </div>
      </label>
    </div>

    <div className={styles?.ledgerAddressTableBodyItemData}>
      <FormatAmount value={balance} rewaLabel={getRewaLabel()} />
    </div>

    <div className={styles?.ledgerAddressTableBodyItemData}>{index}</div>
  </div>
);

export const AddressRow = withStyles(AddressRowComponent, {
  ssrStyles: () =>
    import('UI/ledger/LedgerLoginContainer/AddressRow/addressRowStyles.scss'),
  clientStyles: () =>
    require('UI/ledger/LedgerLoginContainer/AddressRow/addressRowStyles.scss')
      .default
});
