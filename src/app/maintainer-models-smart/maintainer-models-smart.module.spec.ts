import { MaintainerModelsSmartModule } from './maintainer-models-smart.module';

describe('MaintainerModelsSmartModule', () => {
  let maintainerModelsSmartModule: MaintainerModelsSmartModule;

  beforeEach(() => {
    maintainerModelsSmartModule = new MaintainerModelsSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerModelsSmartModule).toBeTruthy();
  });
});
