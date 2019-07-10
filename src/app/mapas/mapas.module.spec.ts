import { MapasModule } from './mapas.module';

describe('MapasModule', () => {
  let mapasModule: MapasModule;

  beforeEach(() => {
    mapasModule = new MapasModule();
  });

  it('should create an instance', () => {
    expect(mapasModule).toBeTruthy();
  });
});
