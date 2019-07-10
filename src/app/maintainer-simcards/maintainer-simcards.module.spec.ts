import { MaintainerSimcardsModule } from './maintainer-simcards.module';

describe('MaintainerSimcardsModule', () => {
  let maintainerSimcardsModule: MaintainerSimcardsModule;

  beforeEach(() => {
    maintainerSimcardsModule = new MaintainerSimcardsModule();
  });

  it('should create an instance', () => {
    expect(maintainerSimcardsModule).toBeTruthy();
  });
});
