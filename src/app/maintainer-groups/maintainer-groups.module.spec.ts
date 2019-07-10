import { MaintainerGroupsModule } from './maintainer-groups.module';

describe('MaintainerGroupsModule', () => {
  let maintainerGroupsModule: MaintainerGroupsModule;

  beforeEach(() => {
    maintainerGroupsModule = new MaintainerGroupsModule();
  });

  it('should create an instance', () => {
    expect(maintainerGroupsModule).toBeTruthy();
  });
});
