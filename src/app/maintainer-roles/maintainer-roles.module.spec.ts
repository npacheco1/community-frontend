import { MaintainerRolesModule } from './maintainer-roles.module';

describe('MaintainerRolesModule', () => {
  let maintainerRolesModule: MaintainerRolesModule;

  beforeEach(() => {
    maintainerRolesModule = new MaintainerRolesModule();
  });

  it('should create an instance', () => {
    expect(maintainerRolesModule).toBeTruthy();
  });
});
