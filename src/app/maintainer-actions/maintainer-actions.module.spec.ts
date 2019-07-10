import { MaintainerActionsModule } from './maintainer-actions.module';

describe('MaintainerActionsModule', () => {
  let maintainerActionsModule: MaintainerActionsModule;

  beforeEach(() => {
    maintainerActionsModule = new MaintainerActionsModule();
  });

  it('should create an instance', () => {
    expect(maintainerActionsModule).toBeTruthy();
  });
});
