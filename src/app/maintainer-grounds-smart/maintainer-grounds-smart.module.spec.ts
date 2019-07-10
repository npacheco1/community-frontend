import { MaintainerGroundsSmartModule } from './maintainer-grounds-smart.module';

describe('MaintainerGroundsSmartModule', () => {
  let maintainerGroundsSmartModule: MaintainerGroundsSmartModule;

  beforeEach(() => {
    maintainerGroundsSmartModule = new MaintainerGroundsSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerGroundsSmartModule).toBeTruthy();
  });
});
