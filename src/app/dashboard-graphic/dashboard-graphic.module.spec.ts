import { DashboardGraphicModule } from './dashboard-graphic.module';

describe('DashboardGraphicModule', () => {
  let dashboardGraphicModule: DashboardGraphicModule;

  beforeEach(() => {
    dashboardGraphicModule = new DashboardGraphicModule();
  });

  it('should create an instance', () => {
    expect(dashboardGraphicModule).toBeTruthy();
  });
});
