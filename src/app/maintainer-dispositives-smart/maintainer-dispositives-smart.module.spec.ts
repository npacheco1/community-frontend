import { MaintainerDispositivesSmartModule } from './maintainer-dispositives-smart.module';

describe('MaintainerDispositivesSmartModule', () => {
  let maintainerDispositivesSmartModule: MaintainerDispositivesSmartModule;

  beforeEach(() => {
    maintainerDispositivesSmartModule = new MaintainerDispositivesSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerDispositivesSmartModule).toBeTruthy();
  });
});
