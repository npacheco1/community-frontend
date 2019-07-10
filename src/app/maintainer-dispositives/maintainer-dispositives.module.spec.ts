import { MaintainerDispositivesModule } from './maintainer-dispositives.module';

describe('MaintainerDispositivesModule', () => {
  let maintainerDispositivesModule: MaintainerDispositivesModule;

  beforeEach(() => {
    maintainerDispositivesModule = new MaintainerDispositivesModule();
  });

  it('should create an instance', () => {
    expect(maintainerDispositivesModule).toBeTruthy();
  });
});
