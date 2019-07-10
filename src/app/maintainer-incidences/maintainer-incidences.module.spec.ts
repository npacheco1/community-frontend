import { MaintainerIncidencesModule } from './maintainer-incidences.module';

describe('MaintainerIncidencesModule', () => {
  let maintainerIncidencesModule: MaintainerIncidencesModule;

  beforeEach(() => {
    maintainerIncidencesModule = new MaintainerIncidencesModule();
  });

  it('should create an instance', () => {
    expect(maintainerIncidencesModule).toBeTruthy();
  });
});
