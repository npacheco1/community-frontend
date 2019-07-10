import { SmartTableModule } from './smart-table.module';

describe('SmartTableModule', () => {
  let smartTableModule: SmartTableModule;

  beforeEach(() => {
    smartTableModule = new SmartTableModule();
  });

  it('should create an instance', () => {
    expect(smartTableModule).toBeTruthy();
  });
});
