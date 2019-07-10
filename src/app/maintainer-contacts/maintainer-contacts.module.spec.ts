import { MaintainerContactsModule } from './maintainer-contacts.module';

describe('MaintainerContactsModule', () => {
  let maintainerContactsModule: MaintainerContactsModule;

  beforeEach(() => {
    maintainerContactsModule = new MaintainerContactsModule();
  });

  it('should create an instance', () => {
    expect(maintainerContactsModule).toBeTruthy();
  });
});
