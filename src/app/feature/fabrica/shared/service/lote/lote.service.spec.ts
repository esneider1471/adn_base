import { Lote } from '@fabrica/shared/model/lote';
import { of } from 'rxjs';

import { LoteService } from './lote.service';

describe('LoteService', () => {
  let service: LoteService;
 let httpClientSpy:{post: jasmine.Spy};

  beforeEach(() => {
   httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
   service = new LoteService(httpClientSpy as  any);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia crear un lote', (done: DoneFn) => {
    const ObjLoteRequest = new Lote('rf01', 25, '10/02/2022', '10/03/2022', 'img1');
    const ObjLote = new Lote('rf01', 25, '10/02/2022', '10/03/2022', 'img1');

    httpClientSpy.post.and.returnValue(of(ObjLoteRequest));

    service.crearLote(ObjLote).subscribe(respuesta =>{
      expect(respuesta).toEqual(ObjLote);
      done();
    })
   
  });

});
