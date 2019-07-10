import { MaintainerUsersModule } from './maintainer-users.module';

describe('MaintainerUsersModule', () => {
  let maintainerUsersModule: MaintainerUsersModule;

  beforeEach(() => {
    maintainerUsersModule = new MaintainerUsersModule();
  });

  it('should create an instance', () => {
    expect(maintainerUsersModule).toBeTruthy();
  });
});
