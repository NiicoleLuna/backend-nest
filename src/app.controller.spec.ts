import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

describe('AppController', () => {
  let appController: AppController;
  let mockDbService: {getUser: jest.Mock};

  beforeEach(async () => {

    mockDbService = {
      getUser: jest.fn().mockReturnValue({ id: 7, nombre: 'Juanita'}),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService, 
        {provide: DbManagerService, useValue: mockDbService},
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Probar el modulo raiz del proyecto', () => {

    it('should return "Hello"', () => {
      expect(appController.getHello()).toBe('Hello');
    });

    it('Debería buscar un id por usuario', () => {
      expect(appController.getUser(12)).toEqual({id: 7, nombre: 'Juanita'});
      expect(mockDbService.getUser).toHaveBeenLastCalledWith(12);
    });
  });
});
