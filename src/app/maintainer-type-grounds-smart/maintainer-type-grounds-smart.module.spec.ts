import { MaintainerTypeGroundsSmartModule } from './maintainer-type-grounds-smart.module';

describe('MaintainerTypeGroundsSmartModule', () => {
  let maintainerTypeGroundsSmartModule: MaintainerTypeGroundsSmartModule;

  beforeEach(() => {
    maintainerTypeGroundsSmartModule = new MaintainerTypeGroundsSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerTypeGroundsSmartModule).toBeTruthy();
  });
});
