import { MaintainerTypeGroundsModule } from './maintainer-type-grounds.module';

describe('MaintainerTypeGroundsModule', () => {
  let maintainerTypeGroundsModule: MaintainerTypeGroundsModule;

  beforeEach(() => {
    maintainerTypeGroundsModule = new MaintainerTypeGroundsModule();
  });

  it('should create an instance', () => {
    expect(maintainerTypeGroundsModule).toBeTruthy();
  });
});
