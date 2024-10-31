import { checkIsValidSender } from '../helpers/checkIsValidSender';

describe('checkIsValidSender tests', () => {
  test('should return true if senderAccount is null', () => {
    expect(
      checkIsValidSender(
        null,
        'moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu'
      )
    ).toBe(true);
  });

  test('should return true if address matches senderAccount.address', () => {
    const mockAccount = {
      address: 'moa1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s8tjw2y'
    };

    expect(
      checkIsValidSender(
        mockAccount,
        'moa1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s8tjw2y'
      )
    ).toBe(true);
  });

  test('should return true if address matches senderAccount.activeGuardianAddress', () => {
    const mockAccount = {
      address: 'moa1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s8tjw2y',
      activeGuardianAddress:
        'moa1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqd6g3qa'
    };
    expect(
      checkIsValidSender(
        mockAccount,
        'moa1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqd6g3qa'
      )
    ).toBe(true);
  });

  test('should return false if address does not match any in senderAccount', () => {
    const mockAccount = {
      address: 'moa1l5xzvt9qwykn900jyxx7rueywy8nwm5sppeh4de4qukucacr2e6s8tjw2y',
      activeGuardianAddress:
        'moa1pu4ru4qu8jt2qmk8vh9xdp8wj234t3mhfwp4zu2fmkmvg8j4hqfqd6g3qa'
    };
    expect(
      checkIsValidSender(
        mockAccount,
        'moa1axhx4kenjlae6sknq7zjg2g4fvzavv979r2fg425p62wkl84avtqa3crsu'
      )
    ).toBe(false);
  });
});
