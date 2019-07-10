import { MaintainerActionsSmartModule } from './maintainer-actions-smart.module';

describe('MaintainerActionsSmartModule', () => {
  let maintainerActionsSmartModule: MaintainerActionsSmartModule;

  beforeEach(() => {
    maintainerActionsSmartModule = new MaintainerActionsSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerActionsSmartModule).toBeTruthy();
  });
});
