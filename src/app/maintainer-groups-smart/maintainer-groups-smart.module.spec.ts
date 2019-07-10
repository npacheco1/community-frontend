import { MaintainerGroupsSmartModule } from './maintainer-groups-smart.module';

describe('MaintainerGroupsSmartModule', () => {
  let maintainerGroupsSmartModule: MaintainerGroupsSmartModule;

  beforeEach(() => {
    maintainerGroupsSmartModule = new MaintainerGroupsSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerGroupsSmartModule).toBeTruthy();
  });
});
