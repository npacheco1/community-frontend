import { MaintainerRolesSmartModule } from './maintainer-roles-smart.module';

describe('MaintainerRolesSmartModule', () => {
  let maintainerRolesSmartModule: MaintainerRolesSmartModule;

  beforeEach(() => {
    maintainerRolesSmartModule = new MaintainerRolesSmartModule();
  });

  it('should create an instance', () => {
    expect(maintainerRolesSmartModule).toBeTruthy();
  });
});
