import { MaintainerZonesModule } from './maintainer-zones.module';

describe('MaintainerZonesModule', () => {
  let maintainerZonesModule: MaintainerZonesModule;

  beforeEach(() => {
    maintainerZonesModule = new MaintainerZonesModule();
  });

  it('should create an instance', () => {
    expect(maintainerZonesModule).toBeTruthy();
  });
});
