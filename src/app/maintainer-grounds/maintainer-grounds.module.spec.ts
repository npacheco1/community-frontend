import { MaintainerGroundsModule } from './maintainer-grounds.module';

describe('MaintainerGroundsModule', () => {
  let maintainerGroundsModule: MaintainerGroundsModule;

  beforeEach(() => {
    maintainerGroundsModule = new MaintainerGroundsModule();
  });

  it('should create an instance', () => {
    expect(maintainerGroundsModule).toBeTruthy();
  });
});
