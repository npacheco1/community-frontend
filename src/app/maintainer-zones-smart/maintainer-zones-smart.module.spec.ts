import { MaintainerZonesSmartModule } from './maintainer-zones-smart.module';

describe('MaintainerZonesSmartModule', () => {
  let maintainerZonesSmartModule: MaintainerZonesSmartModule;

  beforeEach(() => {
    maintainerZonesSmartModule = new MaintainerZonesSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerZonesSmartModule).toBeTruthy();
  });
});
