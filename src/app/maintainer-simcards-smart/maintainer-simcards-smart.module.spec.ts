import { MaintainerSimcardsSmartModule } from './maintainer-simcards-smart.module';

describe('MaintainerSimcardsSmartModule', () => {
  let maintainerSimcardsSmartModule: MaintainerSimcardsSmartModule;

  beforeEach(() => {
    maintainerSimcardsSmartModule = new MaintainerSimcardsSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerSimcardsSmartModule).toBeTruthy();
  });
});
