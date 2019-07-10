import { MaintainerModelsModule } from './maintainer-models.module';

describe('MaintainerModelsModule', () => {
  let maintainerModelsModule: MaintainerModelsModule;

  beforeEach(() => {
    maintainerModelsModule = new MaintainerModelsModule();
  });

  it('should create an instance', () => {
    expect(maintainerModelsModule).toBeTruthy();
  });
});
